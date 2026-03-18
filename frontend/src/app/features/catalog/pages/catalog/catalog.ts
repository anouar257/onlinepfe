import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../../core/services/course.service';
import { Subject } from '../../../../core/models/subject.model';
import { Level } from '../../../../core/models/level.model';

@Component({
    selector: 'app-catalog',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './catalog.html',
    styleUrl: './catalog.scss',
})
export class Catalog implements OnInit {
    subjects: Subject[] = [];
    levels: Level[] = [];
    selectedLevel: number | null = null;

    constructor(
        private courseService: CourseService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.courseService.getSubjects().subscribe((s) => (this.subjects = s));
        this.courseService.getLevels().subscribe((l) => (this.levels = l));

        this.route.queryParams.subscribe((params) => {
            if (params['level']) {
                this.selectedLevel = +params['level'];
            }
            if (params['subject']) {
                // Could scroll to subject
            }
        });
    }

    filterByLevel(levelId: number): void {
        this.selectedLevel = this.selectedLevel === levelId ? null : levelId;
    }

    get filteredSubjects(): Subject[] {
        if (!this.selectedLevel) return this.subjects;
        return this.subjects.filter((s) => s.levels.includes(this.selectedLevel!));
    }

    getLevelName(levelId: number): string {
        const level = this.levels.find((l) => l.id === levelId);
        return level ? level.name : '';
    }

    getAvailableLevels(subject: Subject): Level[] {
        return this.levels.filter((l) => subject.levels.includes(l.id));
    }
}
