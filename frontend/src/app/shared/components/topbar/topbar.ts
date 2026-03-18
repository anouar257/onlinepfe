import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.html',
  styleUrls: ['./topbar.scss']
})
export class TopbarComponent {
  private authService = inject(AuthService);

  get userEmail(): string {
    return this.authService.currentUser()?.email || 'utilisateur@eduplanet.local';
  }

  get userName(): string {
    const email = this.userEmail;
    const localPart = email.split('@')[0] || 'Utilisateur';
    return localPart
      .replace(/[._-]+/g, ' ')
      .split(' ')
      .filter(Boolean)
      .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
      .join(' ');
  }

  get userRoleLabel(): string {
    return this.authService.getRoleLabel(this.authService.getRole());
  }

  logout(): void {
    this.authService.logout();
  }
}
