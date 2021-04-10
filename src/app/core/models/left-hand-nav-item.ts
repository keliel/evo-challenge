
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface LeftHandNavItem {
  icon: IconDefinition;
  selected: boolean;
  muted?: boolean;
  hasUpdates?: boolean;
}
