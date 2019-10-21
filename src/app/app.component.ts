import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ali';
  constructor(public router:Router){}
  navbarOpen=false;
  toggleber(){
    this.navbarOpen=!this.navbarOpen;
  }
  sigin(){
  this.router.navigate(['login']);
  }
  sigup(){
    this.router.navigate(['registration']);
  }
  my(){
    this.router.navigate(['home'])
  }
  
}

