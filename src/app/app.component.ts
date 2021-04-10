import { Component, ViewEncapsulation } from '@angular/core';

import { faBookReader, faBoxOpen, faClipboardCheck, faCoffee, faRoute, faTachometerAlt, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { LeftHandNavItem } from './core/models/left-hand-nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'evo-challenge';
  avatar = 'assets/images/adult-beautiful-girl-blue.png';

  leftHandNav: LeftHandNavItem[] = [
    { icon: faTachometerAlt, link: '/tacho' },
    { icon: faBoxOpen, link: '/some-box', hasUpdates: true },
    { icon: faCoffee, link: '/get-coffee-chat', muted: true },
    { icon: faUserShield, link: '/form-designer', hasUpdates: true },
    { icon: faBookReader, link: '/reader' },
    { icon: faRoute, link: '/' },
    { icon: faClipboardCheck, link: '/' },
  ];
}
