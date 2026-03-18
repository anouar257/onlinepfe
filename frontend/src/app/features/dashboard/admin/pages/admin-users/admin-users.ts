import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-users.html',
  styleUrls: ['./admin-users.scss']
})
export class AdminUsers {
  users = [
    { id: '1023', name: 'Laura Martin', email: 'laura.m@email.com', role: 'Étudiant', status: 'Actif', joinDate: '10 Nov 2026' },
    { id: '1024', name: 'Pierre Dubois', email: 'pierre.d@email.com', role: 'Parent', status: 'Actif', joinDate: '09 Nov 2026' },
    { id: '1025', name: 'M. Leroy', email: 'prof.leroy@email.com', role: 'Professeur', status: 'Actif', joinDate: '01 Nov 2026' },
    { id: '1026', name: 'Sophie L.', email: 'sophie@email.com', role: 'Étudiant', status: 'Inactif', joinDate: '25 Fév 2026' }
  ];
}
