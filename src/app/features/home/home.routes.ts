import { Routes } from '@angular/router';
import { UserService } from '../../core/user/user.service';

export const homeRoutes: Routes = [
  {
    path: '',
    providers: [UserService],
    loadComponent: () => import('./home.component').then((m) => m.HomeComponent),
  },
];
