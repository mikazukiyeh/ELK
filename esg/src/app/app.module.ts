import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainitemComponent } from './mainitem/mainitem.component';
import { IframeDialogComponent } from './iframe-dialog/iframe-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainitemComponent,
    IframeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
