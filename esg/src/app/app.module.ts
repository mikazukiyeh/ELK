import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainitemComponent } from './mainitem/mainitem.component';
import { IframeDialogComponent } from './iframe-dialog/iframe-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TransportationComponent } from './transportation/transportation.component';
import { RecycleComponent } from './recycle/recycle.component';
import { EnvironmentalComponent } from './environmental/environmental.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainitemComponent,
    IframeDialogComponent,
    TransportationComponent,
    RecycleComponent,
    EnvironmentalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
