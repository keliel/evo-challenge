import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  imageUrl = '';

  @Input() set imageSrc(src: string | undefined) {
    this.imageUrl = `url('${src}')`;
  }

}
