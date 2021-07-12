import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Authorization' : localStorage.getItem("token")})
};


@Injectable({
  providedIn: 'root'
})
export class ResultService {

  url="https://technoquiz-1.herokuapp.com/api/question/answer/submit"

  constructor(private http:HttpClient) { }

  
  Postdata(data) {
    
  //   return this.http.post(this.url, data);
  // },httpOptions;
  // return this.http.post(AUTH_API + 'signup', {
  //   username: user.username,
  //   email: user.email,
  //   password: user.password
  // }, httpOptions);
  return this.http.post(this.url , {'skillId':data.skillId,'answers':data.data}, httpOptions);
}
}
