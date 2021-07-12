import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../../Services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  email: String;
  password: String;
  error: string;
  alert: boolean = false;
  success: boolean = false;
  loginData :any = {}

  emailPattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', Validators.required,]
    });
  }

  get formControls() { return this.loginForm.controls; }

  login() {
    let postData = {
      "email": this.email,
      "password": this.password
    };
  
    this.authService.Postdata(postData).subscribe(success => {
      this.loginData = success;
      localStorage.setItem("token", this.loginData.data.token);
      localStorage.setItem("userType", this.loginData.data.userType);
      localStorage.setItem("name",this.loginData.data.name);
  
    
      this.router.navigateByUrl('/test');

    }, error => {
      console.log(error);
      this.alert = true;
      this.error = error.error.message;
    });
  }

  closeAlert() {
    this.alert = false;
  }



}

