import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
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
  toggleSidenav(): void {
    this.drawerComponent?.toggleDrawer();
  }
}
