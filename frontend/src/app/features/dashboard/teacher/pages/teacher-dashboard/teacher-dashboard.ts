import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-dashboard.html',
  styleUrls: ['./teacher-dashboard.scss']
})
export class TeacherDashboard {
  private authService = inject(AuthService);

  stats = {
    students: 142,
    classes: 8,
    revenue: '1,250 €',
    hoursTaught: 45
  };

  recentClasses = [
    { title: 'Mathématiques 3ème', date: 'Aujourd\'hui, 14:00', students: 25, status: 'À venir' },
    { title: 'Physique-Chimie', date: 'Hier, 16:30', students: 22, status: 'Terminé' },
    { title: 'Soutien individuel (Lucas)', date: 'Hier, 18:00', students: 1, status: 'Terminé' }
  ];

  get teacherName(): string {
    const email = this.authService.currentUser()?.email || '';
    if (!email) return 'Professeur';
    const localPart = email.split('@')[0] || 'Professeur';
    return localPart
      .replace(/[._-]+/g, ' ')
      .split(' ')
      .filter(Boolean)
      .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
      .join(' ');
  }
}
