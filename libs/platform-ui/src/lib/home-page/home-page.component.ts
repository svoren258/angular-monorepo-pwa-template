import { RoutesEnum } from '@angular-monorepo-pwa-template/shared-models';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CardFirestoreService } from '@my-pwa/platform-data-access';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'my-pwa-template-home-ui',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, CardComponent, MatButtonModule, MatIconModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  private readonly firestoreService = inject(CardFirestoreService);
  cards = this.firestoreService.cards;

  private readonly router = inject(Router);

  navigateToCustomer(): void {
    this.router.navigateByUrl(`${RoutesEnum.PLATFORM}/${RoutesEnum.CUSTOMER_DETAIL}`);
  }
}
