import { Component, OnInit } from '@angular/core';
import { ActionListService } from '../../services/action-list.service';

@Component({
  templateUrl: './form-designer.component.html',
  styleUrls: ['./form-designer.component.scss']
})
export class FormDesignerComponent implements OnInit {

  actionPoints$ = this.actionListService.loadActionPoints();

  constructor(private readonly actionListService: ActionListService) { }

  ngOnInit(): void {
  }

}
