import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FaqItem {
    question: string;
    answer: string;
    open: boolean;
}

interface FaqCategory {
    name: string;
    icon: string;
    items: FaqItem[];
}

@Component({
    selector: 'app-faq',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './faq.html',
    styleUrl: './faq.scss',
})
export class Faq {
    categories: FaqCategory[] = [
        {
            name: 'Général',
            icon: 'help',
            items: [
                { question: 'Qu\'est-ce qu\'EduPlanet ?', answer: 'EduPlanet est une plateforme éducative en ligne qui propose des cours vidéo, des résumés et des exercices pour les élèves du préscolaire au lycée, ainsi que pour les adultes.', open: false },
                { question: 'Est-ce gratuit ?', answer: 'Les résumés textuels de toutes les leçons sont accessibles gratuitement. L\'accès aux vidéos et aux fonctionnalités avancées nécessite un abonnement.', open: false },
                { question: 'Quelles matières sont disponibles ?', answer: 'Nous proposons plus de 10 matières : Mathématiques, Physique, SVT, Français, Anglais, Histoire-Géographie, Informatique, Chimie, Philosophie, Éducation Islamique et plus encore.', open: false },
                { question: 'Comment accéder aux cours ?', answer: 'Vous pouvez parcourir notre bibliothèque librement. Cliquez sur une matière, choisissez un niveau, puis un thème pour accéder aux leçons.', open: false },
            ],
        },
        {
            name: 'Abonnement',
            icon: 'credit_card',
            items: [
                { question: 'Quels types d\'abonnements proposez-vous ?', answer: 'Nous offrons des abonnements mensuels, trimestriels et annuels. Le tarif dépend du plan choisi et du nombre de matières sélectionnées.', open: false },
                { question: 'Puis-je annuler mon abonnement ?', answer: 'Oui, vous pouvez annuler votre abonnement à tout moment depuis votre espace personnel. L\'accès reste actif jusqu\'à la fin de la période payée.', open: false },
                { question: 'Y a-t-il une période d\'essai gratuite ?', answer: 'Oui, chaque nouvel utilisateur bénéficie d\'une période d\'essai gratuite de 7 jours avec accès complet à toutes les fonctionnalités.', open: false },
            ],
        },
        {
            name: 'Technique',
            icon: 'settings',
            items: [
                { question: 'Sur quels appareils puis-je utiliser EduPlanet ?', answer: 'EduPlanet est accessible sur ordinateur, tablette et smartphone via votre navigateur web. Aucune application à installer.', open: false },
                { question: 'Les vidéos peuvent-elles être téléchargées ?', answer: 'Le téléchargement des vidéos n\'est pas disponible pour le moment. Les cours sont uniquement accessibles en streaming.', open: false },
                { question: 'Que faire si une vidéo ne se charge pas ?', answer: 'Vérifiez votre connexion internet, videz le cache de votre navigateur et essayez à nouveau. Si le problème persiste, contactez notre support.', open: false },
            ],
        },
        {
            name: 'Enseignants & Parents',
            icon: 'groups',
            items: [
                { question: 'Comment suivre la progression de mon enfant ?', answer: 'En tant que parent, vous avez accès à un tableau de bord dédié qui affiche les cours consultés, le temps passé et les résultats aux exercices.', open: false },
                { question: 'Puis-je devenir enseignant sur la plateforme ?', answer: 'Oui, les enseignants qualifiés peuvent postuler pour contribuer à notre contenu. Contactez-nous via le formulaire dédié.', open: false },
            ],
        },
    ];

    toggleFaq(catIndex: number, itemIndex: number): void {
        this.categories[catIndex].items[itemIndex].open = !this.categories[catIndex].items[itemIndex].open;
    }
}
