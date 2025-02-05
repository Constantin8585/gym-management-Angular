import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-offre',
  imports: [CommonModule, FormsModule],
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  offres: Array<any> = [];
  useMachines: boolean = false; // Option pour les machines électriques

  ngOnInit() {
    this.loadOffres();
  }

  loadOffres() {
    this.offres = [
      { id: 1, name: 'Abonnement Hebdomadaire', description: 'Accès complet à la salle de sport pour une semaine.', price: 20 },
      { id: 2, name: 'Abonnement Mensuel', description: 'Accès complet à la salle de sport pour un mois.', price: 50 },
      { id: 3, name: 'Abonnement Trimestriel', description: 'Accès complet à la salle de sport pour trois mois.', price: 140 },
      { id: 4, name: 'Abonnement Annuel', description: 'Accès complet à la salle de sport pour un an.', price: 500 },
      { id: 5, name: 'Coaching Personnel', description: 'Sessions de coaching personnalisées avec un entraîneur.', price: 80 },
      { id: 6, name: 'Rééducation', description: 'Programme de rééducation adapté avec suivi.', price: 100 }
    ];
  }

  toggleMachines() {
    this.useMachines = !this.useMachines;
  }

  getAdjustedPrice(price: number): number {
    return this.useMachines ? price + 10 : price;
  }

  choisirOffre(offre: any) {
    console.log('Offre choisie :', offre);
    // Tu peux ajouter la logique pour ce qui se passe après avoir choisi l'offre
  }
}
