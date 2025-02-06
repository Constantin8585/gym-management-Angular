import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';




import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';


interface Customer {
  id: number;
  lastName: string;
  firstName: string;
  registrationDate: string;
  phoneNumber: string;
  activeSubscription: boolean;
}

@Component({
  
  imports: [



    FormsModule,

    CommonModule

  ],

  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  customers: Customer[] = [
    { id: 1, lastName: 'Doe', firstName: 'John', registrationDate: '2024-01-01', phoneNumber: '123456789', activeSubscription: true },
    { id: 2, lastName: 'Smith', firstName: 'Anna', registrationDate: '2023-05-12', phoneNumber: '987654321', activeSubscription: false }
  ];
  filteredCustomers: Customer[] = [];
  searchTerm: string = '';

  ngOnInit() {
    this.filteredCustomers = [...this.customers];
  }

  filterCustomers() {
    this.filteredCustomers = this.customers.filter(customer =>
      customer.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      customer.firstName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openFilterDialog() {
    alert('Ouverture de la boîte de dialogue de filtrage');
  }

  addCustomer() {
    alert('Ajouter un nouveau client');
  }

  editCustomer(customer: Customer) {
    alert(`Modifier le client: ${customer.firstName} ${customer.lastName}`);
  }

  deleteCustomer(id: number) {
    this.customers = this.customers.filter(customer => customer.id !== id);
    this.filterCustomers();
  }
}
