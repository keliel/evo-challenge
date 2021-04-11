import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ActionPoint } from '../../core/models/action-point';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { faChartLine, faEllipsisH, faExpand, faHistory, faRedoAlt, faUndoAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-action-point-view',
  templateUrl: './action-point-view.component.html',
  styleUrls: ['./action-point-view.component.scss'],
})
export class ActionPointViewComponent implements OnInit, OnDestroy {
  private readonly unsubscribe = new Subject();

  actionPoint: ActionPoint | undefined;
  dotIcon = faEllipsisH;
  revertIcon = faUndoAlt;
  redoIcon = faRedoAlt;
  fullscreenIcon = faExpand;
  stonksIcon = faChartLine;
  historyIcon = faHistory;

  constructor(private readonly router: Router, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.unsubscribe)
    ).subscribe(() => {
      this.actionPoint = {
        id: this.route.snapshot.params.id,
        title: this.route.snapshot.params.id,
      };
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
