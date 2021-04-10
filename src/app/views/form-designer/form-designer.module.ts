import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDesignerRoutingModule } from './form-designer-routing.module';
import { FormDesignerComponent } from './form-designer.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';


@NgModule({
  declarations: [
    FormDesignerComponent
  ],
  imports: [
    CommonModule,
    FormDesignerRoutingModule,
    TreeViewModule,
  ]
})
export class FormDesignerModule { }
