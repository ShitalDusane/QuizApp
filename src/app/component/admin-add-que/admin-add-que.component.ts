import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-admin-add-que',
  templateUrl: './admin-add-que.component.html',
  styleUrls: ['./admin-add-que.component.css']
})
export class AdminAddQueComponent implements OnInit {  

  constructor() { }

  ngOnInit(): void {
  

  }

  onSubmit(value: any)
  {
    console.log(value);
  }

}
