import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = "https://technoquiz-1.herokuapp.com/api/auth/register";

  constructor(private http: HttpClient) { }
  
  Postdata(data) {
    return this.http.post(this.url, data);
  }
}
