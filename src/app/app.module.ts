import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './components/alert/alert.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminLayoutComponent } from './components/layout-admin/layout-admin.component';
import { NavbarComponent } from './components/componentsUtil/navbar/navbar.component';
import { FooterComponent } from './components/componentsUtil/footer/footer.component';
import { SidebarComponent } from './components/componentsUtil/sidebar/sidebar.component';
import { IconsComponent } from './components/icons/icons.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { TypographyComponent } from './components/typography/typography.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  AgmCoreModule
} from '@agm/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { PostListComponent } from './components/post-list/post-list.component';

@NgModule({
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      HttpClientModule,
      appRoutingModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      NgbModule
  ],
  declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      AlertComponent,
      DashboardComponent,
      AdminLayoutComponent,
      NavbarComponent,
      FooterComponent,
      SidebarComponent,
      IconsComponent,
      NotificationsComponent,
      TableListComponent,
      TypographyComponent,
      UpgradeComponent,
      UserProfileComponent,
      UserListComponent,
      PostListComponent
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      AppComponent,
      // provider used to create fake backend
      // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
