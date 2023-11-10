import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//servizio che gestisce le variabili di sessione
export class SessionService {

  set(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  remove(key: string): void {
    sessionStorage.removeItem(key);
  }

  clear(): void {
    sessionStorage.clear();
  }

}
