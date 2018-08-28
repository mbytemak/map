import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-oceania',
  templateUrl: './oceania.component.html',
  styleUrls: ['./oceania.component.css']
})
export class OceaniaComponent implements OnInit {
public oceania;
  constructor(public http:HttpService,private _route:ActivatedRoute,router:Router) { }

  ngOnInit() {



    this.http.getOceania().subscribe(
      data=>{
      console.log("console"+data);
      this.oceania=data;
      },
      error=>{
      console.log(error.errorMessage);
      }
      )





  }

  

}
