import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tutors',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './tutors.html',
    styleUrl: './tutors.scss',
})
export class Tutors {
    tutors = [
        {
            id: 1,
            name: 'Ahmed Benali',
            subject: 'Mathématiques',
            level: 'Collège & Lycée',
            experience: '8 ans d\'expérience',
            rating: 4.9,
            reviews: 124,
            price: '150 MAD/h',
            image: 'https://i.pravatar.cc/150?u=1'
        },
        {
            id: 2,
            name: 'Sarah Idrissi',
            subject: 'Français',
            level: 'Tous niveaux',
            experience: '12 ans d\'expérience',
            rating: 5.0,
            reviews: 89,
            price: '120 MAD/h',
            image: 'https://i.pravatar.cc/150?u=2'
        },
        {
            id: 3,
            name: 'Youssef Filali',
            subject: 'Physique-Chimie',
            level: 'Lycée',
            experience: '5 ans d\'expérience',
            rating: 4.8,
            reviews: 56,
            price: '140 MAD/h',
            image: 'https://i.pravatar.cc/150?u=3'
        },
        {
            id: 4,
            name: 'Nadia Zizi',
            subject: 'Anglais',
            level: 'Tous niveaux',
            experience: '10 ans d\'expérience',
            rating: 4.9,
            reviews: 210,
            price: '130 MAD/h',
            image: 'https://i.pravatar.cc/150?u=4'
        },
        {
            id: 5,
            name: 'Karim Ouazzani',
            subject: 'SVT',
            level: 'Collège & Lycée',
            experience: '7 ans d\'expérience',
            rating: 4.7,
            reviews: 42,
            price: '140 MAD/h',
            image: 'https://i.pravatar.cc/150?u=5'
        },
        {
            id: 6,
            name: 'Laila Amrani',
            subject: 'Mathématiques',
            level: 'Primaire & Collège',
            experience: '4 ans d\'expérience',
            rating: 4.6,
            reviews: 28,
            price: '100 MAD/h',
            image: 'https://i.pravatar.cc/150?u=6'
        }
    ];
}
