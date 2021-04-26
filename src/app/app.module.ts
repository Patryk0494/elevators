import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTetrisModule } from '@fstodulski/ngx-tetris';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTetrisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
