import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  url="https://technoquiz-1.herokuapp.com/api/question/answer/submit"

  constructor(private http:HttpClient) { }

  Postdata(data) {
    return this.http.post(this.url, data);
  }


}
