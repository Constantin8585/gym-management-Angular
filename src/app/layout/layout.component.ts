import { Component, OnInit } from '@angular/core';
import { ClientComponent } from '../client/client.component';
import { OffreComponent } from '../offre/offre.component';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [ClientComponent, OffreComponent, RouterModule, CommonModule]
})
export class LayoutComponent implements OnInit {
  isSidebarOpen = false;
  activePage: string = 'client'; // Page active par défaut

  ngOnInit() {
    this.setActivePage('client'); // Charge les données des clients par défaut
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  setActivePage(page: string) {
    this.activePage = page;
  }
}
