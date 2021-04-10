import { Component, ViewEncapsulation } from '@angular/core';

import { faBookReader, faBoxOpen, faClipboardCheck, faCoffee, faRoute, faTachometerAlt, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { LeftHandNavItem } from './core/models/left-hand-nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  title = 'evo-challenge';
  avatar = 'assets/images/adult-beautiful-girl-blue.png';

  leftHandNav: LeftHandNavItem[] = [
    { icon: faTachometerAlt, selected: false },
    { icon: faBoxOpen, selected: false, hasUpdates: true },
    { icon: faCoffee, selected: false, muted: true },
    { icon: faUserShield, selected: true, hasUpdates: true },
    { icon: faBookReader, selected: false },
    { icon: faRoute, selected: false },
    { icon: faClipboardCheck, selected: false },
  ];
}
