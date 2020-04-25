import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/components/home';
import { LoginComponent } from 'src/app/components/login';
import { AuthGuard } from 'src/app/_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'admin/login', component: LoginComponent },

    // otherwise redirect to home
  //  { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
