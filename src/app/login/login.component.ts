import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  errorMessage: string = '';
  loginForm: any;

  constructor() {}

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    const { userName, password, rememberMe } = this.loginForm.value;

    console.log('Username:', userName);
    console.log('Password:', password);
    console.log('Remember me:', rememberMe);

    this.errorMessage = '';}
}
