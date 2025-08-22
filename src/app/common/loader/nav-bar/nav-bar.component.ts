import { Component, OnInit, HostBinding } from '@angular/core';
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
      route: '/dragon-ball',
    },
    {
      label: 'Nasa WEB APIs',
      subItems: [
        { label: 'Nasa NEO Browser', route: '/nasa-neo' },
        { label: 'Nasa APOD', route: '/nasa-apod' },
      ],
      route: '/nasa-neo',
    },
    {
      label: 'Code Snippet',
      route: '/code-snippet',
    },
    {
      label: 'Tricky Questions',
      route: '/tricky-questions',
    },
    {
      label: 'About',
      route: '/about',
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
  isMenuOpen = false;

  @HostBinding('class.open') get open() {
    return this.isMenuOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectNavItem(index: number, event?: MouseEvent): void {
    this.selectedIndex = index;
    this.isMenuOpen = false;
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
