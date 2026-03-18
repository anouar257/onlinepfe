import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-pricing',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './pricing.html',
    styleUrl: './pricing.scss',
})
export class Pricing {
    plans = [
        {
            id: 'monthly',
            name: 'Mensuel',
            price: '150',
            period: '/mois',
            popular: false,
            features: [
                { name: 'Accès illimité aux vidéos', included: true },
                { name: 'Résumés de cours', included: true },
                { name: 'Tests et Exercices', included: true },
                { name: 'Suivi de progression', included: true },
                { name: 'Aide aux devoirs (Chat)', included: false },
                { name: '1h de tutorat privé', included: false },
            ]
        },
        {
            id: 'quarterly',
            name: 'Trimestriel',
            price: '400',
            period: '/3 mois',
            popular: true,
            savings: 'Soit 133 MAD / mois',
            features: [
                { name: 'Accès illimité aux vidéos', included: true },
                { name: 'Résumés de cours', included: true },
                { name: 'Tests et Exercices', included: true },
                { name: 'Suivi de progression', included: true },
                { name: 'Aide aux devoirs (Chat)', included: true },
                { name: '1h de tutorat privé', included: false },
            ]
        },
        {
            id: 'annual',
            name: 'Annuel',
            price: '1200',
            period: '/an',
            popular: false,
            savings: 'Soit 100 MAD / mois (Économisez 33%)',
            features: [
                { name: 'Accès illimité aux vidéos', included: true },
                { name: 'Résumés de cours', included: true },
                { name: 'Tests et Exercices', included: true },
                { name: 'Suivi de progression', included: true },
                { name: 'Aide aux devoirs (Chat)', included: true },
                { name: '1h de tutorat privé', included: true },
            ]
        }
    ];
}
