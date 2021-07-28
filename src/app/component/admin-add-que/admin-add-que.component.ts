import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SkillsetService } from 'src/app/Services/skillset.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';


@Component({
  selector: 'app-admin-add-que',
  templateUrl: './admin-add-que.component.html',
  styleUrls: ['./admin-add-que.component.css']
})
export class AdminAddQueComponent implements OnInit {

  employee: any = [];
  data: any;
  skillId = '';


  constructor(private que: QuestionService, private SkillSet: SkillsetService, private router: Router, private fb: FormBuilder) {
    this.skillId = location.search.split('skillId=')[1];
  }


  /**
   * @description Below code use for validation
   */
  form = this.fb.group({
    Question: ['', Validators.required],
    RadioOption1: [''],
    RadioOption2: [''],
    RadioOption3: [''],
    RadioOption4: [''],
    Option1: ['', Validators.required],
    Option2: ['', Validators.required],
    Option3: ['', Validators.required],
    Option4: ['', Validators.required],

  });
  ngOnInit(): void {

  }



  AddQuestion(value: any) {
    const r1=document.getElementById("r1") as HTMLInputElement;
    const r2=document.getElementById("r2") as HTMLInputElement;
    const r3=document.getElementById("r3") as HTMLInputElement;
    const r4=document.getElementById("r4") as HTMLInputElement;

   const questionData =  {
      "question": value.Question,
      "skillId": localStorage.getItem('dataSource'),
      "options": [
          {
              "text": value.Option1,
              "isCorrect": r1.checked
          },
          {
              "text": value.Option2,
              "isCorrect": r2.checked
          },
          {
              "text": value.Option3,
              "isCorrect": r3.checked
          },
          {
              "text": value.Option4,
              "isCorrect": r4.checked
          }
      ]
  }
    this.SkillSet.GetAllEmployee(questionData).subscribe(req => {
    });
    console.log(questionData);
    this.form.reset();
  }

  onBack(): void {
    this.router.navigate(['/app-test']);
  }

  onItemChange(event){
    const selectedRedio = event.target.value;
  }
}
