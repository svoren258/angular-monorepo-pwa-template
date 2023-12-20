import { CustomerService } from '@angular-monorepo-pwa-template/customer-data-access';
import { RoutesEnum } from '@angular-monorepo-pwa-template/shared-models';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

type CustomerForm = {
  name: FormControl<string>;
  gender: FormControl<'male' | 'female'>;
  description: FormControl<string>;
};

@Component({
  selector: 'angular-monorepo-pwa-template-customer-detail-page',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './customer-detail-page.component.html',
  styleUrl: './customer-detail-page.component.css'
})
export class CustomerDetailPageComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  customerForm = this.formBuilder.group<CustomerForm>({
    name: new FormControl('', {nonNullable: true}),
    gender: new FormControl('male', {nonNullable: true}),
    description: new FormControl('', {nonNullable: true})
  });

  private readonly customerService = inject(CustomerService);
  selectedCustomer = this.customerService.selectedCustomer();

  ngOnInit(): void {
    if (this.selectedCustomer) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...customer } = this.selectedCustomer;
      this.customerForm.setValue(customer);
    }
  }
  async submitCustomerForm(): Promise<void> {
    await this.customerService.updateCustomer({id: this.selectedCustomer?.id, ...this.customerForm.getRawValue() });
    this.router.navigateByUrl(`${RoutesEnum.PLATFORM}/${RoutesEnum.CUSTOMERS}`);
  }
}
