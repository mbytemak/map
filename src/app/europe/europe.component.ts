import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css']
})
export class EuropeComponent implements OnInit {
public europe
  constructor(public http:HttpService,private _route:ActivatedRoute,router:Router) { }

  ngOnInit() {



this.http.getEurope().subscribe(
  data=>{
  console.log("console"+data);
  this.europe=data;
  },
  error=>{
  console.log(error.errorMessage);
  }
  )



  }

}
