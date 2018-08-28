import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor(public http:HttpService,private _route:ActivatedRoute,router:Router) { }
public currency;
public newData;
  ngOnInit() {



 

    let currId=this._route.snapshot.paramMap.get('name');
    console.log(currId);



    this.http.getcurrecy(currId).subscribe(
      data=>{
       

   
      this.currency=data;
      // console.log("console"+this.currency  +"currId"+currId);
     
    console.log(this.currency[0].currencies[0].code);
this.newData=this.currency.filter(a=>{if(a.languages[0].name==currId){
  return true;
  
}
  
})
console.log(this.newData);
      },
      error=>{
      console.log(error.errorMessage);
      }
      )





  }

}
