import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-dashboard',
  standalone: true,
  templateUrl: './parent-dashboard.html',
  styleUrls: ['./parent-dashboard.scss']
})
export class ParentDashboard {
  children = [
    { name: 'Lucas Dubois', grade: '5ème', progress: 78, recentGrade: '18/20', activeCourse: 'Mathématiques' },
    { name: 'Emma Dubois', grade: '3ème', progress: 92, recentGrade: '16/20', activeCourse: 'Physique-Chimie' }
  ];

  recentActivities = [
    { child: 'Lucas', action: 'Leçon terminée', subject: 'Biologie', time: "Aujourd'hui, 14:30" },
    { child: 'Emma', action: 'Résultat Test', subject: 'Mathématiques', time: "Aujourd'hui, 10:15", score: '16/20' },
    { child: 'Lucas', action: 'Cours en live assisté', subject: 'Anglais', time: "Hier, 17:00" }
  ];
}
