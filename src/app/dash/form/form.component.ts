import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public pay=["Hourly","Full Time"];
  public catagorey=['Collector','Sr.collector','Collection Manager','Account Manager','Office Manager','Sales']
  constructor(public router:Router) { }
  isCollapsed=true;
  ngOnInit() {
  }
  visiable(){
    this.isCollapsed=false;
  }
  hide(){
    this.isCollapsed=true;
  }
  table(){
   this.router.navigate(['full_table']);
  }
}
