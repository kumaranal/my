import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { RegisterformComponent } from './registerform/registerform.component';

const routes: Routes = [
{ path: 'app-registerform', component: RegisterformComponent },
{ path: 'app-welcomepage', component: WelcomepageComponent },
{ path: '', redirectTo: 'app-registerform', pathMatch: 'full' },
    { path: '**', component:  RegisterformComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
