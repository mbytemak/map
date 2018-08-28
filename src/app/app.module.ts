import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';
import { AsiaComponent } from './asia/asia.component';
import { RouterModule, Routes } from '@angular/router';
import { AfricaComponent } from './africa/africa.component';
import { AmericasComponent } from './americas/americas.component';
import { EuropeComponent } from './europe/europe.component';
import { OceaniaComponent } from './oceania/oceania.component';
import { HttpService } from 'src/app/http.service';

import { CurrencyComponent } from './currency/currency.component';

import { LanguageComponent } from './language/language.component';
import { ViewComponent } from './view/view.component';
@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    AsiaComponent,
    AfricaComponent,
    AmericasComponent,
    EuropeComponent,
    OceaniaComponent,
    
    CurrencyComponent,
    
    
    LanguageComponent,
    
    
    ViewComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([

      {path:'region',component:RegionComponent},
      {path:'region/Asia',component:AsiaComponent},
      {path:'region/Africa',component:AfricaComponent},
      {path:'region/Americas',component:AmericasComponent},
      {path:'region/Europe',component:EuropeComponent},
      {path:'region/Oceania',component:OceaniaComponent},
      {path:'currency/:code',component:CurrencyComponent},
     {path:'language/:name',component:LanguageComponent},
     {path:'view/:name',component:ViewComponent}
    
    ]),HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
