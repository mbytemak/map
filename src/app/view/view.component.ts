import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

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
         
      
    this.newData=this.currency.filter(a=>{if(a.name==currId){
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
