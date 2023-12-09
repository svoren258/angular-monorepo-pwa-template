import { NgIf } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '@my-pwa/auth-data-access';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'my-pwa-template-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgIf,
    DrawerComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @ViewChild('drawerComponent') drawerComponent: DrawerComponent | undefined;
  private readonly authService = inject(AuthService);
  toggleSidenav(): void {
    this.drawerComponent?.toggleDrawer();
  }

  logout(): void {
    this.authService.logout();
  }
}
