import { CustomerService } from '@angular-monorepo-pwa-template/customer-data-access';
import { ModalService } from '@angular-monorepo-pwa-template/shared-data-access';
import {
  Customer,
  RoutesEnum,
} from '@angular-monorepo-pwa-template/shared-models';
import { NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { AccordionComponent } from '@my-pwa/shared-ui';
import { take } from 'rxjs';

@Component({
  selector: 'angular-monorepo-pwa-template-checklist-page',
  standalone: true,
  imports: [MatListModule, MatButtonModule, MatIconModule, NgStyle, AccordionComponent],
  templateUrl: './checklist-page.component.html',
  styleUrl: './checklist-page.component.css',
})
export class ChecklistPageComponent {
  private readonly customerService = inject(CustomerService);
  private readonly router = inject(Router);
  private readonly modalService = inject(ModalService);
  customers = this.customerService.customers;

  editCustomer(customerId?: string): void {
    this.customerService.selectCustomer(customerId);
    this.router.navigateByUrl(
      `${RoutesEnum.PLATFORM}/${RoutesEnum.CUSTOMER_DETAIL}`
    );
  }

  deleteCustomer(customer: Customer): void {
    const modalData = {
      title: 'Delete customer',
      description: `Do you really want to remove customer ${customer.name}?`,
      positiveAnswer: 'Yes',
      negativeAnswer: 'No',
    };
    this.modalService
      .openDialog(modalData)
      .pipe(take(1))
      .subscribe((result) => {
        if (result) {
          this.customerService.deleteCustomer(customer.id);
        }
      });
  }

  checkItem(customer: Customer): void {
    this.customerService.updateCustomer({...customer, checked: !customer.checked});
  }

  createChecklist(): void {
    // TODO
  }

  onTitleChange(event: any): void {
    console.log(event)
  }
}
