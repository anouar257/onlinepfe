import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  templateUrl: './teacher-dashboard.html',
  styleUrls: ['./teacher-dashboard.scss']
})
export class TeacherDashboard {
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
}
