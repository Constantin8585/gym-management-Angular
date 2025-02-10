import { Component, OnInit } from '@angular/core';
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
  imports: [FormsModule, CommonModule],
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
editCustomer(_t24: Customer) {
throw new Error('Method not implemented.');
}
openFilterDialog() {
throw new Error('Method not implemented.');
}
  customers: Customer[] = [
    { id: 1, lastName: 'Doe', firstName: 'John', registrationDate: '2024-01-01', phoneNumber: '123456789', activeSubscription: true },
    { id: 2, lastName: 'Smith', firstName: 'Anna', registrationDate: '2023-05-12', phoneNumber: '987654321', activeSubscription: false }
  ];
  filteredCustomers: Customer[] = [];
  searchTerm: string = '';
  isModalOpen: boolean = false;

  newCustomer: Customer = {
    id: 0,
    lastName: '',
    firstName: '',
    registrationDate: '',
    phoneNumber: '',
    activeSubscription: false
  };

  ngOnInit() {
    this.filteredCustomers = [...this.customers];
  }

  filterCustomers() {
    this.filteredCustomers = this.customers.filter(customer =>
      customer.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      customer.firstName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveCustomer() {
    this.newCustomer.id = this.customers.length + 1;
    this.customers.push({ ...this.newCustomer });
    this.filterCustomers();
    this.closeModal();
    this.newCustomer = { id: 0, lastName: '', firstName: '', registrationDate: '', phoneNumber: '', activeSubscription: false };
  }

  deleteCustomer(id: number) {
    this.customers = this.customers.filter(customer => customer.id !== id);
    this.filterCustomers();
  }
}
