import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { faExpand } from '@fortawesome/free-solid-svg-icons';

import { CounterConfig } from '../../models/counter-config';

@Component({
  selector: 'app-overview-tile',
  templateUrl: './overview-tile.component.html',
  styleUrls: ['./overview-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewTileComponent implements OnInit {
  @Input() isExpandable = false;
  @Input() counter: CounterConfig | undefined;
  @Input() title: string | undefined;
  expandIcon = faExpand;

  constructor() { }

  ngOnInit(): void {
  }

}
