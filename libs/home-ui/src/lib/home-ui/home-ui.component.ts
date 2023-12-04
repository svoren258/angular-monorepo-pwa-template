import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Card, FirestoreService } from '@my-pwa/home-data-access';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'my-pwa-template-home-ui',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, CardComponent],
  templateUrl: './home-ui.component.html',
  styleUrl: './home-ui.component.css',
})
export class HomeUiComponent implements OnInit {
  cards: Signal<Card[] | undefined> = signal([]);
  private readonly firestoreService = inject(FirestoreService);
  ngOnInit(): void {
    this.cards = this.firestoreService.cards;
  }
}
