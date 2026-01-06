import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.routes').then((m) => m.homeRoutes),
  },
  {
    path: 'test',
    loadChildren: () => import('./features/users/users.routes').then((m) => m.usersRoutes),
  },
];
