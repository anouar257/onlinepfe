import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8082/api/auth';
  
  currentUser = signal<{email: string, role: string} | null>(this.getUserFromStorage());

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((res: any) => this.setSession(res)),
      catchError(err => throwError(() => new Error('Identifiants incorrects')))
    );
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData).pipe(
      tap((res: any) => this.setSession(res)),
      catchError(err => throwError(() => new Error("Erreur lors de l'inscription")))
    );
  }

  logout() {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_role');
    this.currentUser.set(null);
    this.router.navigate(['/auth/login']);
  }

  private setSession(authResult: any) {
    localStorage.setItem('jwt_token', authResult.token);
    localStorage.setItem('user_email', authResult.email);
    localStorage.setItem('user_role', authResult.role);
    
    this.currentUser.set({
      email: authResult.email,
      role: authResult.role
    });
  }

  private getUserFromStorage() {
    const token = localStorage.getItem('jwt_token');
    if (!token) return null;
    return {
      email: localStorage.getItem('user_email') || '',
      role: localStorage.getItem('user_role') || ''
    };
  }

  getToken() {
    return localStorage.getItem('jwt_token');
  }

  getRole(): string {
    const user = this.currentUser();
    return user ? user.role : '';
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
