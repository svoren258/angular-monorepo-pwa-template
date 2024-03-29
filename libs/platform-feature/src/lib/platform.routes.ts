import { RoutesEnum } from '@angular-monorepo-pwa-template/shared-models';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

export const PLATFORM_ROUTES: Routes = [
  {
    path: RoutesEnum.HOME,
    loadComponent: () =>
      import('@my-pwa/platform-ui').then((m) => m.HomePageComponent),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: RoutesEnum.ABOUT,
    loadComponent: () =>
      import('@my-pwa/about-ui').then((m) => m.AboutUiComponent),
  },
  {
    path: RoutesEnum.CHECKLIST,
    loadComponent: () =>
      import('@angular-monorepo-pwa-template/checklist-ui').then(
        (m) => m.ChecklistPageComponent
      ),
  },
  {
    path: '',
    redirectTo: RoutesEnum.HOME,
    pathMatch: 'full',
  },
];
