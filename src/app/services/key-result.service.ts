import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { KeyResult } from '@models/key-result';

import { KeyResultStatus } from '../core/models/key-result-status.enum';

@Injectable({
  providedIn: 'root',
})
export class KeyResultService {
  keyResultList: KeyResult[] = [
    {
      text: 'We achieved a sales growth in Power Management Applications globally from 65 Mio.€ in 2019 to 128 Mio.€ in 2024',
      progress: 0.5,
      status: KeyResultStatus.OnTrack,
    }, {
      text: 'We reconfigured and applied already existing Technology Portfolio within CTG Group successfully to enlarge our addressable.',
      progress: 0.5,
      status: KeyResultStatus.OnTrack,
    }, {
      text: 'We refocussed the Automotive sales team globally to increase personal customer touch points Tier1 to 60 p.a.',
      progress: 0.5,
      status: KeyResultStatus.OnTrack,
    }, {
      text: 'We established the needed application engineering knowledge locally and conducted all product and customer related trainings needed',
      progress: 0.5,
      status: KeyResultStatus.OnTrack,
    }, {
      text: 'We increased our customer penetration rate to 30%  p.a. for TOP5-Tier 1 with existing Power Management solutions in average',
      progress: 0.5,
      status: KeyResultStatus.OnTrack,
    }, {
      text: 'We increased our customer penetration rate to 30%  p.a. for TOP5-Tier 2 with existing Power Management solutions in average',
      progress: 0.5,
      status: KeyResultStatus.OnTrack,
    },
  ];

  getKeyResults(actionPointId: string): Observable<KeyResult[]> {
    return of(this.keyResultList);
  }
}
