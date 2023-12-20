import { Link, RoutesEnum } from '@angular-monorepo-pwa-template/shared-models';
import { Component, EventEmitter, inject, OnDestroy, Output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListItem, MatListModule } from '@angular/material/list';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'my-pwa-template-sidenav',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnDestroy {
  @Output() toggleDrawer = new EventEmitter<void>();
  readonly links: Link[] = [
    {
      route: RoutesEnum.HOME,
      label: 'Home',
      icon: 'home',
    },
    {
      route: RoutesEnum.ABOUT,
      label: 'About',
      icon: 'info',
    },
    {
      route: RoutesEnum.CUSTOMERS,
      label: 'Customers',
      icon: 'person'
    }
  ];
  private readonly router = inject(Router);
  activeLink = signal<RoutesEnum | undefined>(RoutesEnum.HOME);
  routerEventsSub: Subscription;

  constructor() {
    this.routerEventsSub = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    ).subscribe(event => {
      this.activeLink.set(this.links.map(link => link.route).find(route => event.url.includes(route)));
    });
  }

  // FIXME: workaround for material bug that focuses first list item by default
  removeFocus(listItem: MatListItem): void {
    listItem._elementRef.nativeElement.blur()
  }

  ngOnDestroy(): void {
    this.routerEventsSub.unsubscribe();
  }
}
