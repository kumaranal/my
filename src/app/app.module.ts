import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RegisterformComponent } from './registerform/registerform.component';
import { WebapiService } from './webapi.service';
import { HttpClientModule } from '@angular/common/http';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

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
    HttpClientModule
  ],
  providers: [WebapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
