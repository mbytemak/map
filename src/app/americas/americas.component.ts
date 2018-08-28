import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-americas',
  templateUrl: './americas.component.html',
  styleUrls: ['./americas.component.css']
})
export class AmericasComponent implements OnInit {
public americas;
  constructor(public http:HttpService,private _route:ActivatedRoute,router:Router) { }

  ngOnInit() {


    this.http.getAmericas().subscribe(
      data=>{
      console.log("console"+data);
      this.americas=data;
      },
      error=>{
      console.log(error.errorMessage);
      }
      )



  }

}
