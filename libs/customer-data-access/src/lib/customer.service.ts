import { Customer } from '@angular-monorepo-pwa-template/shared-models';
import { inject, Injectable, signal } from '@angular/core';
import { getRef } from '@angular/fire/compat/database/utils';
import { CollectionReference } from '@angular/fire/compat/firestore';
import { addDoc, collection, doc, Firestore, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly firestore: Firestore = inject(Firestore);
  readonly customers = signal<Customer[]>([]);
  private readonly customersCollection = collection(this.firestore, 'customers') as unknown as CollectionReference<Customer>;
  selectedCustomer = signal<Customer | undefined>(undefined);

  constructor() {
    this.getCustomers();
  }

  selectCustomer(customerId?: string): void {
    this.selectedCustomer.set(this.customers().find(customer => customer.id === customerId));
  }

  async getCustomers(): Promise<void> {
    const customers = await getDocs(this.customersCollection);
    this.customers.set(customers.docs.map(customer => ({...customer.data(), id: customer.id})));
  }

  async updateCustomer(customer: Customer): Promise<void> {
    if (customer.id) {
      await updateDoc(doc(this.customersCollection, customer.id), customer);
      await this.getCustomers();
      this.selectedCustomer.set(undefined);
      return;
    }
    await addDoc(this.customersCollection, customer);
    await this.getCustomers();
  }
}
