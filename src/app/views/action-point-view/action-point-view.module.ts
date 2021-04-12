import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { UiModule } from '@shared/ui/ui.module';

import { ActionPointViewRoutingModule } from './action-point-view-routing.module';
import { ActionPointViewComponent } from './action-point-view.component';
import { BannerComponent } from './components/banner/banner.component';
import { KeyResultListComponent } from './components/key-result-list/key-result-list.component';
import { ActionPointOverviewComponent } from './containers/action-point-overview/action-point-overview.component';

@NgModule({
  declarations: [
    ActionPointViewComponent,
    ActionPointOverviewComponent,
    BannerComponent,
    KeyResultListComponent,
  ],
  imports: [
    CommonModule,
    ActionPointViewRoutingModule,
    UiModule,
    FontAwesomeModule,
    ButtonsModule,
    GridModule,
  ],
})
export class ActionPointViewModule { }
