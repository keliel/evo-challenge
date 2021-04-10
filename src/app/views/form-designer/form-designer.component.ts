import { Component, ViewEncapsulation } from '@angular/core';
import { ActionListService } from '../../services/action-list.service';
import { faClipboardList, faCodeBranch, faDotCircle, faFlag, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ActionPointType } from '../../core/models/action-point-type.enum';

@Component({
  templateUrl: './form-designer.component.html',
  styleUrls: ['./form-designer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormDesignerComponent {

  actionPoints$ = this.actionListService.loadActionPoints();

  constructor(private readonly actionListService: ActionListService) { }

  getTypeIcon(nodeType: ActionPointType): IconDefinition {
    switch (nodeType) {
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

  getTypeColor(nodeType: ActionPointType): string {
    switch (nodeType) {
      case ActionPointType.Goal:
        return '#AE80B2';
      case ActionPointType.Decision:
        return '#22ACD4';
      case ActionPointType.Task:
        return '#596396';
      default:
        return '#4088BF';
    }
  }

}
