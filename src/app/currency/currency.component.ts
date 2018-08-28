import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { jsonpCallbackContext } from '../../../node_modules/@angular/common/http/src/module';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  constructor(public http:HttpService,private _route:ActivatedRoute,router:Router) { }
public currency;
public newData
  ngOnInit() {

    

    let currId=this._route.snapshot.paramMap.get('code');
    console.log(currId);



    this.http.getcurrecy(currId).subscribe(
      data=>{
       

   
      this.currency=data;
      // console.log("console"+this.currency  +"currId"+currId);
     
    console.log(this.currency[0].currencies[0].code);
this.newData=this.currency.filter(a=>{if(a.currencies[0].code==currId){
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
