import { Customer } from '@angular-monorepo-pwa-template/shared-models';
import { inject, Injectable, signal } from '@angular/core';
import { CollectionReference } from '@angular/fire/compat/firestore';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs, updateDoc } from '@angular/fire/firestore';

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

  async updateCustomer({id, ...customer}: Customer): Promise<void> {
    if (id) {
      await updateDoc(doc(this.customersCollection, id), customer);
      await this.getCustomers();
      this.selectedCustomer.set(undefined);
      return;
    }
    await addDoc(this.customersCollection, customer);
    await this.getCustomers();
  }

  async deleteCustomer(id?: string): Promise<void> {
    if (!id) {
      return;
    }
    await deleteDoc(doc(this.customersCollection, id));
    await this.getCustomers();
  }
}
