import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'my-pwa-template-card',
  standalone: true,
  imports: [
    MatCardModule,
    NgStyle
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() backgroundColor: string | undefined;
}
