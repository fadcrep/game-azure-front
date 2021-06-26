import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, SafePipe } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { EmbedIframeComponent } from './embed-iframe/embed-iframe.component';

@NgModule({
  
  declarations: [
    AppComponent,
    SafePipe,
    AuthComponent,
    EmbedIframeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
