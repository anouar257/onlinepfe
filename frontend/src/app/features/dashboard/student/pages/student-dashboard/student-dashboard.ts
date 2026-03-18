import { Component } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  templateUrl: './student-dashboard.html',
  styleUrls: ['./student-dashboard.scss']
})
export class StudentDashboard {
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
}
