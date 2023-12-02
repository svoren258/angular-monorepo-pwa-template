import { Component, Input, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'my-pwa-template-drawer',
  standalone: true,
  imports: [
    MatSidenavModule
  ],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {
  @ViewChild('drawer') drawer: MatDrawer | undefined;

  toggleDrawer() {
    if (this.drawer?.opened) {
      this.drawer?.close();
    } else {
      this.drawer?.open();
    }
  }
}
