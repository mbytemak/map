import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  constructor(public http:HttpService,private _route:ActivatedRoute,router:Router) { }
public regions;
  ngOnInit() {



  }

}
