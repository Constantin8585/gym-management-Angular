import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AbonnementService {
  private apiUrl = 'URL_DE_TON_API';

  constructor(private http: HttpClient) {}

  getAbonnementsActifs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/abonnements/actifs`);
  }

  getAbonnementsInactifs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/abonnements/inactifs`);
  }
}
