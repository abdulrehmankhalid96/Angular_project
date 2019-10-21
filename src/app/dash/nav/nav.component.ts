import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'



 
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public router:Router,public roter:ActivatedRoute) { }

  ngOnInit() {
  }
  fun(){
   this.router.navigate(['dashboard/dummy']);
  }
  funn(){
    this.router.navigate(['dashboard/registration']);
  }
  form(){
    this.router.navigate(['dashboard/from']);
  }
}
