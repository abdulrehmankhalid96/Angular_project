import { NgModule } from '@angular/core';
import { MatButtonModule,  MatToolbarModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
const MatrialComponent=[
  MatButtonModule,MatToolbarModule,MatSidenavModule,MatFormFieldModule,MatSelectModule,MatMenuModule,MatMenuModule
]

@NgModule({
  
  imports: [
    MatrialComponent
  ],
  exports:[MatrialComponent]
})
export class MetrialModule { }
