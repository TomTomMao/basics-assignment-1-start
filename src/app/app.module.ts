import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warningAlert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { SmallComponentComponent } from './small-component/small-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { BeautifulButtonComponent } from './beautiful-button/beautiful-button.component';
import { BeautifulTextInputComponent } from './beautiful-text-input/beautiful-text-input.component';
import { AttributeComponentComponent } from './attribute-component/attribute-component.component';
import { ClassComponentComponent } from './class-component/class-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    SmallComponentComponent,
    ParentComponentComponent,
    BeautifulButtonComponent,
    BeautifulTextInputComponent,
    AttributeComponentComponent,
    ClassComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
