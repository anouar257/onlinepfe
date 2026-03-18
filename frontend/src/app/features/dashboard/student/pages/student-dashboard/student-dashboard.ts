import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student-dashboard.html',
  styleUrls: ['./student-dashboard.scss']
})
export class StudentDashboard {
  private authService = inject(AuthService);

  upcomingClasses = [
    { subject: 'Mathématiques', topic: 'Théorème de Pythagore', time: '14:30', duration: '45 min', teacher: 'M. Dupont' },
    { subject: 'Physique', topic: 'Mécanique Newtonienne', time: '16:00', duration: '60 min', teacher: 'Mme. Martin' }
  ];

  activeCourses = [
    { title: 'Mathématiques 3ème', progress: 65, color: '#3b82f6' },
    { title: 'SVT', progress: 42, color: '#10b981' },
    { title: 'Anglais B2', progress: 85, color: '#f59e0b' }
  ];

  recentGrades = [
    { subject: 'Mathématiques', score: '18/20' },
    { subject: 'Histoire', score: '15/20' }
  ];

  get studentName(): string {
    const email = this.authService.currentUser()?.email || '';
    if (!email) return 'Étudiant';
    const localPart = email.split('@')[0] || 'Étudiant';
    return localPart
      .replace(/[._-]+/g, ' ')
      .split(' ')
      .filter(Boolean)
      .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
      .join(' ');
  }
}
