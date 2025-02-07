import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';


@Component({
  selector: 'app-accueil',
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  abonnementsActifs: any[] = [
    { nom: 'Abonnement 1', date: '2025-02-01' },
    { nom: 'Abonnement 2', date: '2025-01-25' },
    { nom: 'Abonnement 3', date: '2025-01-20' },
    { nom: 'Abonnement 4', date: '2025-01-15' },
    { nom: 'Abonnement 5', date: '2025-01-10' }
  ];

  abonnementsInactifs: any[] = [
    { nom: 'Abonnement 6', date: '2025-01-05' },
    { nom: 'Abonnement 7', date: '2025-01-01' },
    { nom: 'Abonnement 8', date: '2024-12-25' },
    { nom: 'Abonnement 9', date: '2024-12-20' },
    { nom: 'Abonnement 10', date: '2024-12-15' }
  ];

 
  constructor() {}

  ngOnInit() {}
}
