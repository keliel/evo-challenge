import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { NavigationModule } from '@progress/kendo-angular-navigation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDesignerModule } from './views/form-designer/form-designer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    NavigationModule,
    InputsModule,
    IndicatorsModule,
    FormDesignerModule,
    ButtonsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
