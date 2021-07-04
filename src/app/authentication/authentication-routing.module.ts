import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'signin',
    //canActivate: [BlockRouteIfConnectGuard],
    component: LoginComponent,
    data: { title: 'logIn' },
  },

  {
    path: 'signup',
    //canActivate: [BlockRouteIfConnectGuard],
    component: RegisterComponent,
    data: { title: 'register' },
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
