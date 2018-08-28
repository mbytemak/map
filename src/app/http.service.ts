import { Injectable } from '@angular/core';

import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public baseUrl="https://restcountries.eu/rest/v2";
  constructor(private http: HttpClient) {

}

public getEurope(){

let myregions=this.http.get(this.baseUrl+'/region/Europe')


  return myregions
}


public getAmericas(){

  let myAmericas=this.http.get(this.baseUrl+'/region/Americas')
  
  
    return myAmericas
  }

  public getAfrica(){

    let myAfrica=this.http.get(this.baseUrl+'/region/Africa')
    
    
      return myAfrica
    }

    public getAsia(){

      let myAsia=this.http.get(this.baseUrl+'/region/Asia')
      
      
        return myAsia
      }

      public getOceania(){

        let myOceania=this.http.get(this.baseUrl+'/region/Oceania')
        
        
          return myOceania
        }
                    
public getcurrecy(currId){

let currency=this.http.get(this.baseUrl +'/all' )



console.log(currency);



return currency;
}


}
