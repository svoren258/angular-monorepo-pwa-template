import { CustomerService } from '@angular-monorepo-pwa-template/customer-data-access';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
export class CustomerDetailPageComponent {

  private readonly formBuilder = inject(FormBuilder);
  customerForm = this.formBuilder.group<CustomerForm>({
    name: new FormControl('', {nonNullable: true}),
    gender: new FormControl('male', {nonNullable: true}),
    description: new FormControl('', {nonNullable: true})
  });

  private readonly customerService = inject(CustomerService);
  submitCustomerForm(): void {
    this.customerService.updateCustomer(this.customerForm.getRawValue());
  }
}
