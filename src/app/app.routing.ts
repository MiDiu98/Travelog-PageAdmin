import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/app/components/login';
import { AuthGuard } from 'src/app/_helpers';
import { DashboardComponent } from './components/dashboard';
import { AdminLayoutComponent } from './components/layout-admin';
import { UserProfileComponent } from './components/user-profile';
import { UserListComponent } from './components/user-list/user-list.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
    { path: 'admin/login', component: LoginComponent },
    {
      path: '',
      component: AdminLayoutComponent, canActivate: [AuthGuard],
      children: [
          { path: '',      component: DashboardComponent },
          { path: 'dashboard',      component: DashboardComponent },
          { path: 'user-profile',   component: UserProfileComponent },
          { path: 'user-list',     component: UserListComponent },
          { path: 'post-list',     component: PostListComponent }
      ]
    },

    // otherwise redirect to home
  //  { path: '', pathMatch: 'full', redirectTo: '/login' },
  //  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
