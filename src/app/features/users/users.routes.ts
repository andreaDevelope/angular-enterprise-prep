import { Routes } from '@angular/router';
import { UserService } from '../../core/user/user.service';
import { adminGuard } from '../../core/auth/admin.guard';

export const usersRoutes: Routes = [
  {
    path: '',
    providers: [UserService],
    canActivate: [adminGuard],
    loadComponent: () => import('./test.component').then((m) => m.TestComponent),
  },
];
