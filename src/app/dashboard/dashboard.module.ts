import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { EmbedIframeComponent } from './embed-iframe/embed-iframe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SafePipe } from './safe.pipe';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    EmbedIframeComponent,
    DashboardComponent,
    SafePipe,
    GameComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports:[EmbedIframeComponent]
})
export class DashboardModule { }
