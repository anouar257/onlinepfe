import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'app-parent-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent-dashboard.html',
  styleUrls: ['./parent-dashboard.scss']
})
export class ParentDashboard {
  private authService = inject(AuthService);

  children = [
    { name: 'Lucas Dubois', grade: '5ème', progress: 78, recentGrade: '18/20', activeCourse: 'Mathématiques' },
    { name: 'Emma Dubois', grade: '3ème', progress: 92, recentGrade: '16/20', activeCourse: 'Physique-Chimie' }
  ];

  recentActivities = [
    { child: 'Lucas', action: 'Leçon terminée', subject: 'Biologie', time: "Aujourd'hui, 14:30" },
    { child: 'Emma', action: 'Résultat Test', subject: 'Mathématiques', time: "Aujourd'hui, 10:15", score: '16/20' },
    { child: 'Lucas', action: 'Cours en live assisté', subject: 'Anglais', time: "Hier, 17:00" }
  ];

  get parentName(): string {
    const email = this.authService.currentUser()?.email || '';
    if (!email) return 'Parent';
    const localPart = email.split('@')[0] || 'Parent';
    return localPart
      .replace(/[._-]+/g, ' ')
      .split(' ')
      .filter(Boolean)
      .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
      .join(' ');
  }
}
