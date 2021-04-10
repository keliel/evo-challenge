import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDesignerComponent } from './form-designer.component';

const routes: Routes = [
  {
    path: '',
    component: FormDesignerComponent,
    loadChildren: () => import('../action-point-view/action-point-view.module').then(m => m.ActionPointViewModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormDesignerRoutingModule { }
