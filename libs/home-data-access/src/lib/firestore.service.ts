import { inject, Injectable, signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Card } from './models/card.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  cards: Signal<Card[] | undefined>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'cards');
    this.cards = toSignal(collectionData(itemCollection) as Observable<Card[]>);
  }
}
