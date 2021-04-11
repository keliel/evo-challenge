import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionPointViewRoutingModule } from './action-point-view-routing.module';
import { ActionPointViewComponent } from './action-point-view.component';
import { ActionPointOverviewComponent } from './containers/action-point-overview/action-point-overview.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonsModule } from '@progress/kendo-angular-buttons';


@NgModule({
  declarations: [
    ActionPointViewComponent,
    ActionPointOverviewComponent
  ],
  imports: [
    CommonModule,
    ActionPointViewRoutingModule,
    FontAwesomeModule,
    ButtonsModule,
  ]
})
export class ActionPointViewModule { }
