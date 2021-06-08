import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/Services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private post:ResultService) { }
   
  ngOnInit(): void {
  }

}
