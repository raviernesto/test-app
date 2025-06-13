import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  navItems = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Nasa NEO Browser',
      route: '/nasa-neo',
    },
    {
      label: 'About',
      route: '/',
    },
    {
      label: 'Resume',
      route: '/resume',
    },
    {
      label: 'Contact',
      subItems: [
        { label: 'Email', route: '/contact/email' },
        { label: 'Phone', route: '/contact/phone' },
      ],
      route: '/contact',
    },
  ];
  selectedIndex = 0;
  expandedIndex: number | null = null;

  selectNavItem(index: number, event?: MouseEvent): void {
    this.selectedIndex = index;
    const item = this.navItems[index];
    if (!item.subItems && item.route) {
      this.router.navigate([item.route]);
    }
    if (event) {
      event.stopPropagation();
    }
  }

  navigateTo(route: string | undefined, event?: MouseEvent): void {
    if (route) {
      this.router.navigate([route]);
    }
    if (event) {
      event.stopPropagation();
    }
  }

  constructor(private router: Router) {}
  ngOnInit(): void {}
}
