import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActionPointType } from '../core/models/action-point-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ActionListService {

  private actionPointList = [
    {
      id: 'sdfsfsf',
      title: 'Visualize impactful mindshare',
      subactions: [{
        id: 'sdfwfsf',
        title: 'Monetize B2B portals',
        type: ActionPointType.Goal,
        subactions: [{
          id: 'sdfawfsf',
          title: 'Streamline customized models',
          type: ActionPointType.Decision,
          subactions: [{
            id: 'sdfawfadsf',
            title: 'Architect ubiquitous deliverables',
            type: ActionPointType.Task,
          }]
        }]
      }]
    },
    {
      id: 'sdfsf1f',
      title: 'Integrate clicks-and-mortar methodologies',
      subactions: [{
        id: 'sdfwfsf',
        title: 'Monetize B2B portals',
        type: ActionPointType.Goal,
        subactions: [{
          id: 'sdfawfsf',
          title: 'Streamline customized models',
          type: ActionPointType.Decision,
          subactions: [{
            id: 'sdfawfadsf',
            title: 'Architect ubiquitous deliverables',
            type: ActionPointType.Task,
          }]
        }]
      }]
    },
    {
      id: 'sadfsf1f',
      title: 'Integrate cslicks-and-mortar methodologies',
    }
  ];

  constructor() { }


  loadActionPoints(): Observable<any> {
    return of(this.actionPointList);
  }
}
