import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionPointViewComponent } from './action-point-view.component';
import { ActionPointOverviewComponent } from './containers/action-point-overview/action-point-overview.component';

const routes: Routes = [{
  path: '',
  component: ActionPointViewComponent,
  children: [{
    path: 'overview',
    pathMatch: 'full',
    component: ActionPointOverviewComponent,
  },
  // TODO: Add more paths here with generic mock component
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'overview',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionPointViewRoutingModule { }
