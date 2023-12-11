import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';
import { RoutesEnum } from '../../../shared-models/src/lib/routes.model';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

export const PLATFORM_ROUTES: Routes = [
  {
    path: RoutesEnum.HOME,
    loadComponent: () => import('@my-pwa/platform-ui').then(m => m.HomePageComponent),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: RoutesEnum.ABOUT,
    loadComponent: () => import('@my-pwa/about-ui').then(m => m.AboutUiComponent)
  },
  {
    path: '',
    redirectTo: RoutesEnum.HOME,
    pathMatch: 'full'
  }
]
