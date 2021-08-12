import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RegisterformComponent } from './registerform/registerform.component';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { WebapiService } from './webapi.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClient,
    HttpErrorResponse
  ],
  providers: [WebapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
