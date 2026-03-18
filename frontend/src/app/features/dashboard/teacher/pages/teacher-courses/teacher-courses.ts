import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-courses.html',
  styleUrls: ['./teacher-courses.scss']
})
export class TeacherCourses {
  myCourses = [
    { title: 'Mathématiques - Algèbre 3ème', students: 120, lessons: 15, rating: '4.8' },
    { title: 'Mathématiques - Géométrie 3ème', students: 85, lessons: 10, rating: '4.6' }
  ];
}
