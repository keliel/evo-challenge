import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { KeyResultService } from '@services/key-result.service';

@Component({
  selector: 'app-key-result-list',
  templateUrl: './key-result-list.component.html',
  styleUrls: ['./key-result-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyResultListComponent implements OnInit {

  keyResults$ = this.keyResultService.getKeyResults('sometestid');

  constructor(private readonly keyResultService: KeyResultService) { }

  ngOnInit(): void {
  }

}
