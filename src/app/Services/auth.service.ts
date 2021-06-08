import { Injectable } from '@angular/core';
import { User } from '../component/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = "https://technoquiz-1.herokuapp.com/api/auth/login";

  Postdata(data) {
    return this.http.post(this.url, data);
  }
  public login(userInfo: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
}

public isLoggedIn(){
  return localStorage.getItem('ACCESS_TOKEN') !== null;

}
public logout(){
  localStorage.removeItem('ACCESS_TOKEN');
}




}
