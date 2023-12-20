import { CustomerService } from '@angular-monorepo-pwa-template/customer-data-access';
import { RoutesEnum } from '@angular-monorepo-pwa-template/shared-models';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-monorepo-pwa-template-customers-page',
  standalone: true,
  imports: [
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './customers-page.component.html',
  styleUrl: './customers-page.component.css'
})
export class CustomersPageComponent {
  private readonly customerService = inject(CustomerService);
  private readonly router = inject(Router)
  customers = this.customerService.customers;

  editCustomer(customerId?: string): void {
    this.customerService.selectCustomer(customerId);
    this.router.navigateByUrl(`${RoutesEnum.PLATFORM}/${RoutesEnum.CUSTOMER_DETAIL}`);
  }

  deleteCustomer(customerId?: string): void {
    this.customerService.deleteCustomer(customerId);
  }
}
