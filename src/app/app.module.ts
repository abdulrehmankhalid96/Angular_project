import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiginModule } from './sigin/sigin.module'
import { SigupModule } from './sigup/sigup.module';
import { IntroModule } from './intro/intro.module';
import { DashModule } from './dash/dash.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetrialModule } from './metrial/metrial.module';
import { from } from 'rxjs';




 




@NgModule({
  declarations: [
    AppComponent,
    
   
   
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiginModule,
    SigupModule,
    IntroModule,
    DashModule,
    BrowserAnimationsModule,
    MetrialModule
   

    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
