import { Component } from '@angular/core';

import { CounterConfig } from './counter-config';
import { DarknessLevel } from './darkness-level.enum';

export interface OverviewTileComponentConfig {
  title?: string;
  titleDarkness?: DarknessLevel;
  counter?: CounterConfig;
  isExpandable?: boolean;
  contentComponent?: Component;
}
