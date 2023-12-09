import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Route } from '@angular/router';

const redirectLoggedInToHomePage = () => redirectLoggedInTo(['home']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () => import('@my-pwa/auth-ui').then(m => m.LoginPageComponent),
    ...canActivate(redirectLoggedInToHomePage),
  },
  {
    path: 'home',
    loadComponent: () => import('@my-pwa/home-ui').then(m => m.HomePageComponent),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'about',
    loadComponent: () => import('@my-pwa/about-ui').then(m => m.AboutUiComponent)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];
