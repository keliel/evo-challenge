import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';

import { OverviewTileComponent } from './components/overview-tile/overview-tile.component';

@NgModule({
  imports: [
    CommonModule,
    IndicatorsModule,
    FontAwesomeModule,
  ],
  declarations: [
    OverviewTileComponent,
  ],
  exports: [
    OverviewTileComponent,
  ],
})
export class UiModule { }
