import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RegisterformComponent } from './registerform/registerform.component';
import { WebapiService } from './webapi.service';
import { HttpClientModule } from '@angular/common/http';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';


@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent,
    WelcomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot()
    
    
   
  ],
  providers: [WebapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
