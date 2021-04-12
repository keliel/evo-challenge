import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { faExpand } from '@fortawesome/free-solid-svg-icons';

import { CounterConfig } from '../../models/counter-config';
import { DarknessLevel } from '../../models/darkness-level.enum';

@Component({
  selector: 'app-overview-tile',
  templateUrl: './overview-tile.component.html',
  styleUrls: ['./overview-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewTileComponent {
  @Input() isExpandable = false;
  @Input() counter: CounterConfig | undefined;
  @Input() title: string | undefined;
  @Input() titleDarkness: DarknessLevel = DarknessLevel.Grey;
  expandIcon = faExpand;
}
