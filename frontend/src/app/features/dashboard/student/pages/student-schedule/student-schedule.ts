import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-schedule.html',
  styleUrls: ['./student-schedule.scss']
})
export class StudentSchedule {
  weekDays = ['Lun 02', 'Mar 03', 'Mer 04', 'Jeu 05', 'Ven 06'];
  hours = ['08:00', '10:00', '14:00', '16:00'];
  
  schedule: any = {
    '0_1': { subject: 'Maths', teacher: 'M. Dubois', color: '#3b82f6' },
    '1_2': { subject: 'Physique', teacher: 'Mme. Martin', color: '#10b981' },
    '2_0': { subject: 'Anglais', teacher: 'Mr. Smith', color: '#f59e0b' },
    '4_2': { subject: 'Histoire', teacher: 'M. Leroy', color: '#ef4444' }
  };

  getClass(dayIndex: number, hourIndex: number) {
    return this.schedule[`${dayIndex}_${hourIndex}`];
  }
}
