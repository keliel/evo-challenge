import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeyResultService {
  keyResultList = [
    {
      text: 'We achieved a sales growth in Power Management Applications globally from 65 Mio.€ in 2019 to 128 Mio.€ in 2024',
      progress: '50', // Type of value between 0 and 100
      status: 0, // Enum of OnTrack, Behind, NotStarted
    }, {
      text: 'We reconfigured and applied already existing Technology Portfolio within CTG Group successfully to enlarge our addressable.',
      progress: '50',
      status: 0,
    }, {
      text: 'We achieved a sales growth in Power Management Applications globally from 65 Mio.€ in 2019 to 128 Mio.€ in 2024',
      progress: '50',
      status: 0,
    }, {
      text: 'We reconfigured and applied already existing Technology Portfolio within CTG Group successfully to enlarge our addressable.',
      progress: '50',
      status: 0,
    },
  ];

  getKeyResults(actionPointId: string): Observable<any> {
    return of(this.keyResultList);
  }
}
