import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsetService {

  constructor(private http:HttpClient) { }
  url = "https://technoquiz-1.herokuapp.com/api/skill";

  getSkillData() {
    return this.http.get(this.url);
  }
}
