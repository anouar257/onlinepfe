import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../../core/services/course.service';
import { Lesson, LessonContent } from '../../../../core/models/lesson.model';
import { Theme } from '../../../../core/models/theme.model';
import { Subject as SubjectModel } from '../../../../core/models/subject.model';

@Component({
    selector: 'app-lesson',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './lesson.html',
    styleUrl: './lesson.scss',
})
export class LessonPage {
    lesson: Lesson | undefined;
    lessonContent: LessonContent | undefined;
    subject: SubjectModel | undefined;
    siblingLessons: Lesson[] = [];
    themes: Theme[] = [];
    activeTab: 'video' | 'notes' | 'tests' | 'exercises' = 'video';

    constructor(
        private courseService: CourseService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            const lessonId = +params['lessonId'];
            this.loadLesson(lessonId);
        });
    }

    loadLesson(lessonId: number): void {
        this.courseService.getLessonById(lessonId).subscribe((lesson) => {
            this.lesson = lesson;
            if (lesson) {
                this.courseService.getSubjectById(lesson.subjectId).subscribe((s) => (this.subject = s));
                this.courseService.getLessonContent(lessonId).subscribe((c) => (this.lessonContent = c));
                this.courseService.getLessonsByTheme(lesson.themeId).subscribe((lessons) => (this.siblingLessons = lessons));
                this.courseService.getThemes(lesson.subjectId, lesson.levelId).subscribe((themes) => (this.themes = themes));
            }
        });
    }

    switchTab(tab: 'video' | 'notes' | 'tests' | 'exercises'): void {
        this.activeTab = tab;
    }

    isCurrentLesson(l: Lesson): boolean {
        return l.id === this.lesson?.id;
    }

    navigateBack(): void {
        this.location.back();
    }
}
