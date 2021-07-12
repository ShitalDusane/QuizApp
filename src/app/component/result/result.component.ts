import { Component, OnInit, Input } from '@angular/core';
import { ResultService } from 'src/app/Services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() sendresult;
  resultdata;
  score;
  name:string;
  
  constructor(private post: ResultService) {
    
    this.name = localStorage.getItem('name');
   
}

  ngOnInit(): void {

  }
  ngOnChanges() {
    this.resultdata = JSON.parse(this.sendresult); // from quiz
    this.score = ((this.resultdata.score / this.resultdata.total) * 100);

  }

  //  parentWillTakeAction(sendresult){
  //   this.messageFromChild = sendresult;
  // }
}

