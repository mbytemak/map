import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit {
public asia;
  constructor(public http:HttpService,private _route:ActivatedRoute,router:Router) { }

  ngOnInit() {



    this.http.getAsia().subscribe(
      data=>{
      console.log("console"+data);
      this.asia=data;
      },
      error=>{
      console.log(error.errorMessage);
      }
      )

  }

}
