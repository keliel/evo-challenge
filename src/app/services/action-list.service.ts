import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { v1 as uuid } from 'uuid';
import { ActionPointType } from '../core/models/action-point-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ActionListService {

  private actionPointList = [
    {
      id: uuid(),
      title: 'Visualize impactful mindshare',
      subactions: [{
        id: uuid(),
        title: 'Monetize B2B portals',
        type: ActionPointType.Goal,
      }]
    },
    {
      id: uuid(),
      title: 'Enable value-added convergence',
      subactions: [{
        id: uuid(),
        title: 'Something hidden',
      }]
    },
    {
      id: uuid(),
      title: 'Visualize vertical interfaces',
      subactions: [{
        id: uuid(),
        title: 'Something hidden',
      }]
    },
    {
      id: uuid(),
      title: 'Integrate clicks-and-mortar methodologies',
      subactions: [{
        id: uuid(),
        title: 'Monetize B2B portals',
        type: ActionPointType.Goal,
        subactions: [{
          id: uuid(),
          title: 'Streamline customized models',
          type: ActionPointType.Decision,
          subactions: [{
            id: uuid(),
            title: 'Architect ubiquitous deliverables',
            type: ActionPointType.Task,
          }]
        }]
      }]
    },
    {
      id: uuid(),
      title: 'Enable efficient interfaces',
      subactions: [{
        id: uuid(),
        title: 'Something hidden',
      }]
    },
    {
      id: uuid(),
      title: 'Monetize ubiquitous deliverables',
      subactions: [{
        id: uuid(),
        title: 'Something hidden',
      }]
    },
    {
      id: uuid(),
      title: 'Repurpose viral metrics',
      subactions: [{
        id: uuid(),
        title: 'Something hidden',
      }]
    },
    {
      id: uuid(),
      title: 'Benchmark open-source technologies',
      subactions: [{
        id: uuid(),
        title: 'Something hidden',
      }]
    },
    {
      id: uuid(),
      title: 'Envisioneer cross-platform methodologies',
      subactions: [{
        id: uuid(),
        title: 'Something hidden',
      }]
    },
    {
      id: uuid(),
      title: 'Deploy B2C mindshare',
      subactions: [{
        id: uuid(),
        title: 'Something hidden',
      }]
    },
    {
      id: uuid(),
      title: 'Disintermediate interactive architectures',
      secured: true,
      subactions: [{
        id: uuid(),
        title: 'Something hidden',
      }]
    },
    {
      id: uuid(),
      title: 'Matrix holistic deliverables',
      subactions: [{
        id: uuid(),
        title: 'Something hidden',
      }]
    },
    {
      id: uuid(),
      title: 'Incentivize open-source niches',
      subactions: [{
        id: uuid(),
        title: 'Something hidden',
      }]
    },
    {
      id: uuid(),
      title: 'Mesh enterprise infomediaries',
      subactions: [{
        id: uuid(),
        title: 'Something hidden',
      }]
    },
    {
      id: uuid(),
      title: 'Engage customized paradigms',
      subactions: [{
        id: uuid(),
        title: 'Something hidden',
      }]
    },
    {
      id: uuid(),
      title: 'Orchestrate back-end schemas',
      subactions: [{
        id: uuid(),
        title: 'Something hidden',
      }]
    },
    {
      id: uuid(),
      title: 'Engage real-time ROI',
      subactions: [{
        id: uuid(),
        title: 'Something hidden',
      }]
    },
  ];

  constructor() { }


  loadActionPoints(): Observable<any> {
    return of(this.actionPointList);
  }
}
