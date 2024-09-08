import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() itemImg: string = '';
  @Input() action: string = '';
  @Input() actionDesc: string = '';
  @Input() type: string = '';
  @Input() name: string = '';
  @Input() price: string = '';
}
