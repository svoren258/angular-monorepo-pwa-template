import { Customer } from '@angular-monorepo-pwa-template/shared-models';
import { inject, Injectable } from '@angular/core';
import { CollectionReference } from '@angular/fire/compat/firestore';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly firestore: Firestore = inject(Firestore);
  // private readonly customersCollection = collection(this.firestore, 'customers') as unknown as CollectionReference<Customer>;
  async updateCustomer(customer: Customer): Promise<void> {
    await addDoc(collection(this.firestore, 'customers'), customer);
    // await this.customersCollection.add(customer);
  }
}
