import { inject, Injectable, signal } from '@angular/core';
import { CollectionReference } from '@angular/fire/compat/firestore';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { Card } from './models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardFirestoreService {
  readonly cards = signal<Card[]>([]);
  private readonly firestore: Firestore = inject(Firestore);
  private readonly cardsCollection = collection(this.firestore, 'cards') as unknown as CollectionReference<Card>;

  constructor() {
    this.getCards();
  }

  async getCards(): Promise<void> {
    const cards = await getDocs(this.cardsCollection);
    this.cards.set(cards.docs.map(card => card.data()));
  }
}
