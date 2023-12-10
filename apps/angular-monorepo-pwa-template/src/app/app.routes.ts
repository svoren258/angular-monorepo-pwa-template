import { RoutesEnum } from '@angular-monorepo-pwa-template/shared-models';
import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { Route } from '@angular/router';
import { PLATFORM_ROUTES } from '@my-pwa/platform-data-access';

const redirectLoggedInToPlatform = () => redirectLoggedInTo(['platform']);

export const appRoutes: Route[] = [
  {
    path: RoutesEnum.LOGIN,
    loadComponent: () => import('@my-pwa/auth-ui').then(m => m.LoginPageComponent),
    ...canActivate(redirectLoggedInToPlatform),
  },
  {
    path: RoutesEnum.PLATFORM,
    loadComponent: () => import('@my-pwa/platform-ui').then(m => m.PlatformComponent),
    children: PLATFORM_ROUTES
  },
  {
    path: '',
    redirectTo: RoutesEnum.LOGIN,
    pathMatch: 'full'
  },
];
