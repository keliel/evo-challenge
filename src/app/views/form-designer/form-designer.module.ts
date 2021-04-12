import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { FormDesignerRoutingModule } from './form-designer-routing.module';
import { FormDesignerComponent } from './form-designer.component';

@NgModule({
  declarations: [
    FormDesignerComponent,
  ],
  imports: [
    CommonModule,
    FormDesignerRoutingModule,
    TreeViewModule,
    FontAwesomeModule,
  ],
})
export class FormDesignerModule { }
