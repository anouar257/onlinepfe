import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-courses.html',
  styleUrls: ['./student-courses.scss']
})
export class StudentCourses {
  enrolledCourses = [
    { id: 1, title: 'Mathématiques 3ème', progress: 65, color: '#3b82f6', nextModule: 'Équations à 2 inconnues', totalLessons: 24, completedLessons: 15 },
    { id: 2, title: 'Physique-Chimie', progress: 42, color: '#10b981', nextModule: 'Les atomes', totalLessons: 18, completedLessons: 7 },
    { id: 3, title: 'Anglais B2', progress: 85, color: '#f59e0b', nextModule: 'Expression écrite', totalLessons: 30, completedLessons: 25 },
    { id: 4, title: 'Histoire-Géo', progress: 12, color: '#ef4444', nextModule: 'La Guerre Froide', totalLessons: 20, completedLessons: 2 }
  ];
}
