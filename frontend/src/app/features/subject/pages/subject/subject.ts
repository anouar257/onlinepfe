import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../../core/services/course.service';
import { Subject as SubjectModel } from '../../../../core/models/subject.model';
import { Level } from '../../../../core/models/level.model';
import { Theme } from '../../../../core/models/theme.model';
import { Lesson } from '../../../../core/models/lesson.model';

@Component({
    selector: 'app-subject',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './subject.html',
    styleUrl: './subject.scss',
})
export class SubjectPage implements OnInit {
    subject: SubjectModel | undefined;
    level: Level | undefined;
    themes: Theme[] = [];
    lessonsByTheme: Record<number, Lesson[]> = {};
    activeThemeId: number | null = null;
    viewMode: 'grid' | 'list' = 'grid';

    constructor(
        private courseService: CourseService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            const subjectId = +params['subjectId'];
            const levelId = +params['levelId'];

            this.courseService.getSubjectById(subjectId).subscribe((s) => (this.subject = s));
            this.courseService.getLevelById(levelId).subscribe((l) => (this.level = l));
            this.courseService.getThemes(subjectId, levelId).subscribe((themes) => {
                this.themes = themes;
                if (themes.length > 0) {
                    this.activeThemeId = themes[0].id;
                }
                themes.forEach((theme) => {
                    this.courseService
                        .getLessonsByTheme(theme.id)
                        .subscribe((lessons) => (this.lessonsByTheme[theme.id] = lessons));
                });
            });
        });
    }

    setActiveTheme(themeId: number): void {
        this.activeThemeId = themeId;
    }

    get totalLessons(): number {
        return this.themes.reduce((acc, t) => acc + t.lessonsCount, 0);
    }

    toggleView(mode: 'grid' | 'list'): void {
        this.viewMode = mode;
    }
}
