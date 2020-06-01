import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/components/home';
import { LoginComponent } from 'src/app/components/login';
import { AuthGuard } from 'src/app/_helpers';
import { DashboardComponent } from './components/dashboard';
import { AdminLayoutComponent } from './components/layout-admin';
import { TableListComponent } from './components/table-list';
import { AdminLayoutRoutes } from './components/layout-admin/admin-layout.routing';
import { UserProfileComponent } from './components/user-profile';
import { TypographyComponent } from './components/typography/typography.component';
import { IconsComponent } from './components/icons/icons.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';

const routes: Routes = [
   // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
     { path: 'home', component: HomeComponent},
    // { path: 'layout', component: AdminLayoutComponent},
    { path: 'admin/login', component: LoginComponent },
    {
      path: '',
      component: AdminLayoutComponent, canActivate: [AuthGuard],
      children: [
          { path: 'dashboard',      component: DashboardComponent },
          { path: 'user-profile',   component: UserProfileComponent },
          { path: 'table-list',     component: TableListComponent },
          { path: 'typography',     component: TypographyComponent },
          { path: 'icons',          component: IconsComponent },
          { path: 'notifications',  component: NotificationsComponent },
          { path: 'upgrade',        component: UpgradeComponent },
      ]
    },

    // otherwise redirect to home
  //  { path: '', pathMatch: 'full', redirectTo: '/login' },
  //  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
