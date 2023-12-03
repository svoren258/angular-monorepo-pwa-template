import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'my-pwa-template-sidenav',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @Output() toggleDrawer = new EventEmitter<void>();
}