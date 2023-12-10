import { RoutesEnum } from '@angular-monorepo-pwa-template/shared-models';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

export const PLATFORM_ROUTES = [
  {
    path: RoutesEnum.HOME,
    loadComponent: () => import('@my-pwa/platform-ui').then(m => m.HomePageComponent),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: RoutesEnum.ABOUT,
    loadComponent: () => import('@my-pwa/about-ui').then(m => m.AboutUiComponent)
  },
]
