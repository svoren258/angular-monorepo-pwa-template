import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () => import('@my-pwa/home-ui').then(m => m.HomeUiComponent)

  },
  {
    path: 'about',
    loadComponent: () => import('@my-pwa/about-ui').then(m => m.AboutUiComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
