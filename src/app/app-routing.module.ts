import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form-designer',
    loadChildren: () => import('./views/form-designer/form-designer.module').then(m => m.FormDesignerModule),
  }, {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'form-designer',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
