import { Routes } from '@angular/router';
import { UserService } from '../../core/user/user.service';

export const usersRoutes: Routes = [
  {
    path: '',
    providers: [UserService],
    loadComponent: () => import('./test.component').then((m) => m.TestComponent),
  },
];
