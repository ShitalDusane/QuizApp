import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  singupForm: FormGroup;
  data: any;
  name: String;
  email: String;
  gender: String;
  position: String;
  skills: String;
  password: String;
  error: string;
  alert: boolean = false;
  success: boolean = false;

  constructor(private post: RegisterService) { }

  ngOnInit(): void {
    this.singupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
      'email': new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
      'gender': new FormControl(),
      'skills': new FormArray([]),
      'position': new FormControl(null)
    });
  }

  onSubmit() {
    let postData = {
      "name": this.name,
      "email": this.email,
      "password": this.password,
      "position": this.position,
      "skills": this.singupForm.get('skills').value,
      "gender": this.gender
    };

    this.post.Postdata(postData).subscribe(success => {
      this.success = true;
      console.log(success);
    }, error => { // second parameter is to listen for error
      console.log(error);
      this.alert = true;
      this.error = error.error.message;
    });
  }

  onAddSkill() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.singupForm.get('skills')).push(control);
  }

  closeAlert() {
    this.alert = false;
  }

}
