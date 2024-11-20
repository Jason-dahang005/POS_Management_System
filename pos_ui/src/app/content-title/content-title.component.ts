import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-title',
  standalone: true,
  imports: [],
  templateUrl: './content-title.component.html',
  styleUrl: './content-title.component.css'
})
export class ContentTitleComponent {

  @Input() contentTitle: string = ''
}
