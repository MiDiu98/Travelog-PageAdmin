import { Component, OnInit, OnDestroy, SystemJsNgModuleLoader } from '@angular/core';
import { User } from 'src/app/_models';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/user-list', title: 'User List',  icon:'content_paste', class: '' },
    { path: '/post-list', title: 'Post List',  icon:'content_paste', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  menuItems: any[];
  currentUSer: User;

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  ngOnDestroy() {
    //this.current
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  }

  logout() {
    console.log("logout");
  }
}
