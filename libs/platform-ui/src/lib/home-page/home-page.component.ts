import { ButtonType } from '@angular-monorepo-pwa-template/shared-models';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { CardFirestoreService } from '@my-pwa/platform-data-access';
import { ButtonComponent } from '@my-pwa/shared-ui';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'my-pwa-template-home-ui',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, CardComponent, MatButtonModule, ButtonComponent, MatIconModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  private readonly firestoreService = inject(CardFirestoreService);
  cards = this.firestoreService.cards;
  protected readonly ButtonType = ButtonType;
}
