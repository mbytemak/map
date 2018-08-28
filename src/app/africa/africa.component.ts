import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.css']
})
export class AfricaComponent implements OnInit {
public africa;
  constructor(public http:HttpService,private _route:ActivatedRoute,router:Router) { }

  ngOnInit() {


    this.http.getAfrica().subscribe(
      data=>{
      console.log("console"+data);
      this.africa=data;
      },
      error=>{
      console.log(error.errorMessage);
      }
      )




  }

}
