import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.scss']
})
export class AdminDashboard {
  private authService = inject(AuthService);

  stats = {
    totalUsers: '5,234',
    newUsersMonth: '+420',
    totalCourses: '185',
    activeSessions: '34'
  };

  get adminName(): string {
    const email = this.authService.currentUser()?.email || '';
    if (!email) return 'Admin';
    const localPart = email.split('@')[0] || 'Admin';
    return localPart
      .replace(/[._-]+/g, ' ')
      .split(' ')
      .filter(Boolean)
      .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
      .join(' ');
  }
}
