import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmbedIframeComponent } from './embed-iframe/embed-iframe.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: 'user/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    canActivateChild:[AuthGuard]
  },

  {
    path: 'user/dashboard/game',
    component: GameComponent,
    canActivate: [AuthGuard],
    canActivateChild:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
