import { Component, OnInit } from '@angular/core';
import { ClientComponent } from '../client/client.component';
import { OffreComponent } from '../offre/offre.component';
import { AccueilComponent } from "../accueil/accueil.component";
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { Router,NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [ClientComponent, OffreComponent, RouterModule, CommonModule, AccueilComponent]
})
export class LayoutComponent {
  isSidebarOpen = false;
  activePage: string = ''; // Page active par défaut
  
  constructor(private router:Router){}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activePage = event.urlAfterRedirects;
      }
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  setActivePage(page: string) {
    this.activePage = page;
  }
}
