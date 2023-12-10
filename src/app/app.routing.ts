import { ModuleWithProviders } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.modules').then((m) => m.PagesModule),
  },
];

export const routing: ModuleWithProviders<unknown> = RouterModule.forRoot(
  routes,
  {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy',
  }
);
