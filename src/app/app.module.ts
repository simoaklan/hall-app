import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';
import { environment } from '../environments/environment';
import { CoreModule } from './core';
import { AppRoutingModule } from './app-routing.module';
import { HallService } from './core/services/hall.service';
import { AppComponent } from './app.component';
import { HallComponent } from './hall/hall.component';

@NgModule({
  declarations: [
    AppComponent,
    HallComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
