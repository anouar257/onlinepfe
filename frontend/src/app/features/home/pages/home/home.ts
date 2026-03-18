import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../../../core/services/course.service';
import { Subject } from '../../../../core/models/subject.model';
import { Level } from '../../../../core/models/level.model';

interface CarouselSlide {
    title: string;
    highlight: string;
    subtitle: string;
    image: string;
    bgColor: string;
}

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
    subjects: Subject[] = [];
    levels: Level[] = [];
    activeLevel: number | null = null;
    searchQuery = '';

    // Carousel Data
    slides: CarouselSlide[] = [
        {
            title: 'Rien de plus,',
            highlight: 'que du savoir',
            subtitle: 'La meilleure plateforme éducative pour les enfants, adolescents, parents et enseignants.',
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
            bgColor: '#f0f4ff'
        },
        {
            title: 'Apprenez avec les meilleurs',
            highlight: 'Professeurs certifiés',
            subtitle: 'Des cours particuliers et des vidéos de haute qualité pour garantir la réussite.',
            image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80&w=800',
            bgColor: '#fef3e2'
        },
        {
            title: 'Préparez vos',
            highlight: 'Examens sereinement',
            subtitle: 'Des parcours guidés, des tests et des résumés complets pour atteindre vos objectifs.',
            image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
            bgColor: '#e8f4f8'
        }
    ];
    currentSlideIndex = 0;
    private carouselInterval: any;

    constructor(
        private courseService: CourseService, 
        private router: Router,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    onSearch(): void {
        if (this.searchQuery.trim()) {
            this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
        }
    }

    ngOnInit(): void {
        this.courseService.getSubjects().subscribe((s) => (this.subjects = s));
        this.courseService.getLevels().subscribe((l) => (this.levels = l));
        
        if (isPlatformBrowser(this.platformId)) {
            this.startCarousel();
        }
    }

    ngOnDestroy(): void {
        if (this.carouselInterval) {
            clearInterval(this.carouselInterval);
        }
    }

    startCarousel(): void {
        this.carouselInterval = setInterval(() => {
            this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
        }, 5000); // Change slide every 5 seconds
    }

    goToSlide(index: number): void {
        this.currentSlideIndex = index;
        if (this.carouselInterval) {
            clearInterval(this.carouselInterval);
            this.startCarousel(); // Restart the timer when heavily interacted
        }
    }

    filterByLevel(levelId: number): void {
        this.activeLevel = this.activeLevel === levelId ? null : levelId;
    }

    get filteredSubjects(): Subject[] {
        if (!this.activeLevel) return this.subjects;
        return this.subjects.filter((s) => s.levels.includes(this.activeLevel!));
    }

    getLevelIcon(levelId: number): string {
        const icons: Record<number, string> = {
            1: 'child_care',
            2: 'school',
            3: 'menu_book',
            4: 'workspace_premium',
            5: 'person',
            6: 'quiz',
        };
        return icons[levelId] || 'school';
    }
}
