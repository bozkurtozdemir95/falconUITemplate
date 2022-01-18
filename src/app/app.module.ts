import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { ProgressButtonComponent } from './components/progress-button/progress-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonToggleComponent,
    ProgressButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
