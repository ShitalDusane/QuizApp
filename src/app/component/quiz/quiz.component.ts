import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import { ResultService } from 'src/app/Services/result.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  sendresult: any;
  data: object;
  skillId = '';
  docs: [];
  visible:boolean=false;
  currentQueId = 0;
  allQuestion: any;
  currentQue = {
    'options': [],
    'question': '',
    'id': '',
    'skillId': '',
    '_id': ''
  };
  queCount: number;
  questionNumber = 1;
  options: [];
  selectedEntry = [];
  result: any;


  constructor(private que: QuestionService, private router: Router, private resultservice: ResultService) {
    this.skillId = location.search.split('skillId=')[1];
   
  }

  ngOnInit(): void {
    this.que.getQue(this.skillId).subscribe((data: any) => {
      this.data = data.data;
      this.currentQue = data.data.docs[this.currentQueId];
      this.allQuestion = data.data.docs;
      this.queCount = this.allQuestion.length;
    });

  }

  nextQue() {
    this.visible=false;
    if (this.questionNumber < this.queCount) {
      this.questionNumber++;
      this.currentQueId++;
      this.currentQue = this.allQuestion[this.currentQueId];
      setTimeout(function () { }, 1000);
    }

  }

  onSelectionChange(option, queId) {
   
    let data = { 'questionId': queId, 'answerId': option._id };
    this.selectedEntry.push(data);
    this.visible=true;
    
  }

  submitTest() {

    let data = {
      'skillId': this.skillId,
      'data': this.selectedEntry
    }
    console.log(data);
    this.resultservice.Postdata(data).subscribe((data: any) => {
      this.result = data.data;
      this.sendresult = JSON.stringify(this.result);
      // console.log("datakdsfkl ", this.sendresult)
    });


    // this.router.navigateByUrl('/result');
  }


  prevQue() {
    if (this.questionNumber > 1) {
      this.currentQueId--;
      this.questionNumber--;
      this.currentQue = this.allQuestion[this.currentQueId];
      setTimeout(function () { }, 1000);
    }
  }
}
