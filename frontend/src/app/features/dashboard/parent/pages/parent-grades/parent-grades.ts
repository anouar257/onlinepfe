import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-grades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent-grades.html',
  styleUrls: ['./parent-grades.scss']
})
export class ParentGrades {
  grades = [
    { child: 'Lucas', subject: 'Mathématiques', title: 'Équations du 1er degré', score: '18/20', date: '05 Nov 2026', status: 'Excellent' },
    { child: 'Lucas', subject: 'Physique', title: 'La gravitation', score: '14/20', date: '02 Nov 2026', status: 'Bien' },
    { child: 'Emma', subject: 'Biologie', title: 'La cellule humaine', score: '16/20', date: '01 Nov 2026', status: 'Très Bien' },
    { child: 'Emma', subject: 'Anglais', title: 'Vocabulaire Voyage', score: '19/20', date: '28 Oct 2026', status: 'Excellent' },
    { child: 'Lucas', subject: 'Histoire', title: 'La Révolution', score: '12/20', date: '25 Oct 2026', status: 'Passable' }
  ];
}
