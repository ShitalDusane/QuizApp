import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Authorization' : localStorage.getItem("token")})
};

@Injectable({
  providedIn: 'root'
})
export class SkillsetService {

  skillIdadmin: any ;
  constructor(private http:HttpClient) { }
  url = "https://technoquiz-1.herokuapp.com/api/skill";
  url1 = "https://technoquiz-1.herokuapp.com/";

  getSkillData() {
    return this.http.get(this.url);
  }

   GetSkillIdForAdmin(skillIdforadmin): Observable<any> {
    this.skillIdadmin = skillIdforadmin;
    localStorage.setItem('dataSource', this.skillIdadmin); // setting
    console.log(localStorage.getItem('dataSource')); // getting
    return of(null);
  }

  
  GetAllEmployee(value): Observable<any> {
    return this.http.post(this.url1 + 'api/question' ,value,httpOptions);

  }


}




























  // GetSkillIdForAdmin(skillIdforadmin): Observable<any> {
  //   this.skillIdadmin = skillIdforadmin;
  //   localStorage.setItem('dataSource', this.skillIdadmin); // setting
  //   console.log(localStorage.getItem('dataSource')); // getting
  //   return of(null);
  // }

  
  // GetAllEmployee(value): Observable<any> {
  //   let data = {
  //     'skillId': localStorage.getItem('dataSource'),
  //      data : value,
  //   }
  //   return this.http.post(this.url1 ,data);

  // }
