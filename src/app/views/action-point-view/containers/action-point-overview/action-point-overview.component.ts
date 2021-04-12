import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { faCodeBranch, faComments, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { DarknessLevel } from '@shared/ui/models/darkness-level.enum';
import { OverviewTileComponentConfig } from '@shared/ui/models/overview-tile-component-config';

// TODO: Would really prefer to write a dynamic component class loader, if time allowed.
type TileComponent = 'banner' | 'owner';

interface OverviewTileConfig extends OverviewTileComponentConfig {
  gridClass?: string;
  component?: TileComponent;
}

@Component({
  templateUrl: './action-point-overview.component.html',
  styleUrls: ['./action-point-overview.component.scss'],
})
export class ActionPointOverviewComponent implements OnInit {
  tiles: OverviewTileConfig[] = [
    { gridClass: 'k-col-start-1 k-colspan-4 k-rowspan-2', component: 'banner' },
    { gridClass: 'k-col-start-5 k-col-end-7 k-rowspan-1', title: 'Owner' },
    { gridClass: 'k-col-start-7 k-col-end-9 k-rowspan-2', title: 'Team' },
    {
      gridClass: 'k-col-start-5 k-colspan-1 k-rowspan-1',
      title: 'Aggregated Process',
      titleDarkness: DarknessLevel.LightGrey,
    },
    {
      gridClass: 'k-col-start-6 k-colspan-1 k-rowspan-1',
      title: 'Aggregated Status',
      titleDarkness: DarknessLevel.LightGrey,
    },
    {
      gridClass: 'k-col-start-1 k-colspan-4 k-rowspan-2',
      title: 'Comments',
      titleDarkness: DarknessLevel.Dark,
      counter: { value: 34, icon: faComments },
    },
    {
      gridClass: 'k-col-start-5 k-col-end-9 k-rowspan-3',
      title: 'Key Results',
      titleDarkness: DarknessLevel.Black,
      counter: { value: 350, icon: faCodeBranch, iconRotation: 90 },
      isExpandable: true,
    },
    {
      gridClass: 'k-col-start-1 k-colspan-4 k-rowspan-1',
      title: 'Attachments',
      counter: { value: 3, icon: faPaperclip },
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
