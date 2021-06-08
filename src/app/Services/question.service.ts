import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  getQue(skillId){
    let url = "https://technoquiz-1.herokuapp.com/api/question?skillId="+skillId+"&limit=100&page=1";

    console.log(skillId);
    return this.http.get(url);
  }
  
}
