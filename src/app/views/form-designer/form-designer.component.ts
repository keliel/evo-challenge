import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { faClipboardList, faCodeBranch, faDotCircle, faFlag, faLock, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { ActionPoint } from '../../core/models/action-point';
import { ActionPointType } from '../../core/models/action-point-type.enum';
import { ActionListService } from '../../services/action-list.service';

@Component({
  templateUrl: './form-designer.component.html',
  styleUrls: ['./form-designer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormDesignerComponent {

  actionPoints$ = this.actionListService.loadActionPoints();

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly actionListService: ActionListService
  ) { }

  displayExtraIcon(item: ActionPoint): boolean {
    return item.secured || item.type !== undefined;
  }

  getTypeIcon(item: ActionPoint): IconDefinition {
    if (item.secured) {
      return faLock;
    }
    switch (item.type) {
      case ActionPointType.Goal:
        return faFlag;
      case ActionPointType.Decision:
        return faCodeBranch;
      case ActionPointType.Task:
        return faClipboardList;
      default:
        return faDotCircle;
    }
  }

  getTypeColor(item: ActionPoint): string {
    switch (item.type) {
      case ActionPointType.Goal:
        return '#AE80B2';
      case ActionPointType.Decision:
        return '#22ACD4';
      case ActionPointType.Task:
        return '#596396';
      case ActionPointType.Point:
        return '#4088BF';
      default:
        return 'inherit';
    }
  }

  isNodeDisabled(item: any): boolean {
    return !!item.secured;
  }

  navigateToNodeDetails({ dataItem }: { dataItem: ActionPoint }): void {
    this.router.navigate([dataItem.id], { relativeTo: this.route });
  }

}
