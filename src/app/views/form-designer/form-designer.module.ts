import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDesignerRoutingModule } from './form-designer-routing.module';
import { FormDesignerComponent } from './containers/form-designer/form-designer.component';


@NgModule({
  declarations: [
    FormDesignerComponent
  ],
  imports: [
    CommonModule,
    FormDesignerRoutingModule
  ]
})
export class FormDesignerModule { }
