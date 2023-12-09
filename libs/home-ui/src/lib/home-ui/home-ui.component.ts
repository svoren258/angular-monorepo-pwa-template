import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardFirestoreService } from '@my-pwa/home-data-access';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'my-pwa-template-home-ui',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, CardComponent, MatButtonModule],
  templateUrl: './home-ui.component.html',
  styleUrl: './home-ui.component.css',
})
export class HomeUiComponent {
  private readonly firestoreService = inject(CardFirestoreService);
  cards = this.firestoreService.cards;
}
