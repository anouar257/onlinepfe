import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

export interface RoleOption {
  value: string;
  label: string;
  icon: string;
  desc: string;
}

type CanonicalRole = 'STUDENT' | 'PARENT' | 'TEACHER' | 'ADMIN';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8082/api/auth';

  private readonly fallbackRoles: RoleOption[] = [
    { value: 'STUDENT', label: 'Étudiant', icon: 'school', desc: 'Je suis un élève ou étudiant' },
    { value: 'PARENT', label: 'Parent', icon: 'family_restroom', desc: "Je suis parent d\'un élève" },
    { value: 'TEACHER', label: 'Enseignant', icon: 'person', desc: 'Je suis professeur/enseignant' }
  ];
  
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
    this.router.navigate(['/login']);
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

  normalizeRole(rawRole: string | null | undefined): CanonicalRole | '' {
    if (!rawRole) return '';

    const normalized = rawRole
      .toUpperCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/^ROLE_/, '')
      .replace(/[-\s]/g, '_');

    if (['STUDENT', 'ETUDIANT', 'ELEVE', 'LEARNER'].includes(normalized)) return 'STUDENT';
    if (['TEACHER', 'PROF', 'PROFESSEUR', 'ENSEIGNANT'].includes(normalized)) return 'TEACHER';
    if (['ADMIN', 'ADMINISTRATEUR', 'SUPER_ADMIN'].includes(normalized)) return 'ADMIN';
    if (['PARENT', 'TUTEUR', 'GUARDIAN'].includes(normalized)) return 'PARENT';

    return '';
  }

  getDashboardRoute(role: string | null | undefined): string {
    const normalized = this.normalizeRole(role);

    switch (normalized) {
      case 'STUDENT':
        return '/dashboard/student';
      case 'TEACHER':
        return '/dashboard/teacher';
      case 'ADMIN':
        return '/dashboard/admin';
      default:
        return '/dashboard/parent';
    }
  }

  getRoleLabel(role: string | null | undefined): string {
    const normalized = this.normalizeRole(role);

    switch (normalized) {
      case 'STUDENT':
        return 'ÉTUDIANT';
      case 'TEACHER':
        return 'PROFESSEUR';
      case 'ADMIN':
        return 'ADMINISTRATEUR';
      default:
        return 'PARENT';
    }
  }

  getAvailableRoles(): Observable<RoleOption[]> {
    return this.http.get<string[]>(`${this.apiUrl}/roles`).pipe(
      map((roles: string[]) => {
        const unique = new Set<CanonicalRole>();

        for (const rawRole of roles) {
          const normalized = this.normalizeRole(rawRole);
          if (normalized) unique.add(normalized);
        }

        if (unique.size === 0) {
          return this.fallbackRoles;
        }

        return Array.from(unique).map((role) => this.roleToOption(role));
      }),
      catchError(() => of(this.fallbackRoles))
    );
  }

  private roleToOption(role: CanonicalRole): RoleOption {
    switch (role) {
      case 'STUDENT':
        return { value: 'STUDENT', label: 'Étudiant', icon: 'school', desc: 'Je suis un élève ou étudiant' };
      case 'TEACHER':
        return { value: 'TEACHER', label: 'Enseignant', icon: 'person', desc: 'Je suis professeur/enseignant' };
      case 'ADMIN':
        return { value: 'ADMIN', label: 'Administrateur', icon: 'shield_person', desc: 'Je gère la plateforme EduPlanet' };
      default:
        return { value: 'PARENT', label: 'Parent', icon: 'family_restroom', desc: "Je suis parent d'un élève" };
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
