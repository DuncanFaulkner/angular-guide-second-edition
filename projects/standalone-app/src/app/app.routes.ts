import { Routes } from '@angular/router';

export const routes: Routes = [
  // { path: 'dashboard', component: Dashboard }
  {
    path: 'dashboard/:id/:someOtherParameter',
    loadComponent: () => import('./dashboard/dashboard').then((d) => d.Dashboard),
    title: 'Dashboard',
    data: { preload: true },
  },
];
