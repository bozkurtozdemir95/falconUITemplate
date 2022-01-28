import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonToggleComponent} from './components/button-toggle/button-toggle.component';
import {ProgressButtonComponent} from './components/progress-button/progress-button.component';
import {ButtonComponent} from './components/button/button.component';
import {SlideToggleComponent} from './components/slide-toggle/slide-toggle.component';
import {IconComponent} from './components/icon/icon.component';
import {EllipseButtonComponent} from './components/ellipse-button/ellipse-button.component';
import {PopupComponent} from './components/popup/popup.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {TextInputComponent} from './components/text-input/text-input.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {CheckboxInputComponent} from './components/checkbox-input/checkbox-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CollapseComponent } from './components/collapse/collapse.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonToggleComponent,
    ProgressButtonComponent,
    ButtonComponent,
    SlideToggleComponent,
    IconComponent,
    EllipseButtonComponent,
    PopupComponent,
    SidebarComponent,
    TextInputComponent,
    DropdownComponent,
    CheckboxInputComponent,
    CollapseComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    DropdownComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
