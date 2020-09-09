import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/Listes-utilisateurs', title: 'Listes des utilisateurs',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/Calendar', title: 'Calendrier',  icon:'ni-bullet-list-67 text-red', class: '' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  currentUser: any;

  constructor(private router: Router , private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
   this.currentUser = this.tokenStorageService.getUser();

  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['login'])
  }
}
