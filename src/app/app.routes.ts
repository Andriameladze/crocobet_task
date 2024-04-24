import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'slots',
  },
  {
    path: 'sport',
    loadComponent: () =>
      import('./features/sport/sport.component').then((m) => m.SportComponent),
  },
  {
    path: 'live',
    loadComponent: () =>
      import('./features/live/live.component').then((m) => m.LiveComponent),
  },
  {
    path: 'slots',
    loadComponent: () =>
      import('./features/slots/slots.component').then((m) => m.SlotsComponent),
  },
  {
    path: 'casino',
    loadComponent: () =>
      import('./features/casino/casino.component').then(
        (m) => m.CasinoComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'slots',
  },
];
