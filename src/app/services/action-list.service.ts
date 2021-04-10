import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionListService {

  private actionPointList = [
    {
      id: 'sdfsfsf',
      title: 'Visualize impactful mindshare',
      subactions: []
    },
    {
      id: 'sdfsf1f',
      title: 'Integrate clicks-and-mortar methodologies',
      subactions: [{
        id: 'sdfwfsf',
        title: 'Monetize B2B portals',
      }]
    },
  ];

  constructor() { }


  loadActionPoints(): Observable<any> {
    return of(this.actionPointList);
  }
}
