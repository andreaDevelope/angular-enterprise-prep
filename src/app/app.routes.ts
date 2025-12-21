import { Routes } from '@angular/router';
import { UserService } from './core/user/user.service';

export const routes: Routes = [
  {
    path: '',
    providers: [UserService],
    loadComponent: () => import('./pages/test/test.component').then((m) => m.TestComponent),
  },
];
