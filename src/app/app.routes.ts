import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ClientComponent } from './client/client.component';
import { OffreComponent } from './offre/offre.component';
import { CommonModule } from '@angular/common';
import path from 'path';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'layout', component: LayoutComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige vers la page de login par défaut

  {
    path: 'app',
  component: LayoutComponent,
  children: [
    {path: 'client', component: ClientComponent},
    {path: 'offre', component: OffreComponent}
  ]
  }//Routes avec layout
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }

