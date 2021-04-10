import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDesignerRoutingModule } from './form-designer-routing.module';
import { FormDesignerComponent } from './form-designer.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    FormDesignerComponent
  ],
  imports: [
    CommonModule,
    FormDesignerRoutingModule,
    TreeViewModule,
    FontAwesomeModule,
  ]
})
export class FormDesignerModule { }
