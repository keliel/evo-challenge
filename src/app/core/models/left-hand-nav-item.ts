
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface LeftHandNavItem {
  icon: IconDefinition;
  link: string;
  muted?: boolean;
  hasUpdates?: boolean;
}
