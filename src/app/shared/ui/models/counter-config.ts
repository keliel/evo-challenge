import { RotateProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface CounterConfig {
  value: number;
  icon?: IconDefinition;
  iconRotation?: RotateProp;
}
