import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RegisterformComponent } from './registerform/registerform.component';
import { HttpClient } from '@angular/common/http';
import { freeApiService} from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClient
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
