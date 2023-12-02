import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

@Component({
  standalone: true,
  imports: [RouterModule, DashboardComponent],
  selector: 'angular-monorepo-pwa-template-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-monorepo-pwa-template';
}
