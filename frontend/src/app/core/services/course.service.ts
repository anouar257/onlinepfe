import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subject } from '../models/subject.model';
import { Level } from '../models/level.model';
import { Theme } from '../models/theme.model';
import { Lesson, LessonContent } from '../models/lesson.model';
import {
    MOCK_SUBJECTS,
    MOCK_LEVELS,
    MOCK_THEMES,
    MOCK_LESSONS,
    MOCK_LESSON_CONTENTS,
} from '../data/mock-data';

@Injectable({
    providedIn: 'root',
})
export class CourseService {
    /* ───────── Subjects ───────── */

    getSubjects(): Observable<Subject[]> {
        return of(MOCK_SUBJECTS);
    }

    getSubjectById(id: number): Observable<Subject | undefined> {
        return of(MOCK_SUBJECTS.find((s) => s.id === id));
    }

    /* ───────── Levels ───────── */

    getLevels(): Observable<Level[]> {
        return of(MOCK_LEVELS);
    }

    getLevelById(id: number): Observable<Level | undefined> {
        return of(MOCK_LEVELS.find((l) => l.id === id));
    }

    getLevelsForSubject(subjectId: number): Observable<Level[]> {
        const subject = MOCK_SUBJECTS.find((s) => s.id === subjectId);
        if (!subject) return of([]);
        return of(MOCK_LEVELS.filter((l) => subject.levels.includes(l.id)));
    }

    /* ───────── Themes ───────── */

    getThemes(subjectId: number, levelId: number): Observable<Theme[]> {
        return of(
            MOCK_THEMES
                .filter((t) => t.subjectId === subjectId && t.levelId === levelId)
                .sort((a, b) => a.order - b.order)
        );
    }

    /* ───────── Lessons ───────── */

    getLessonsByTheme(themeId: number): Observable<Lesson[]> {
        return of(
            MOCK_LESSONS
                .filter((l) => l.themeId === themeId)
                .sort((a, b) => a.order - b.order)
        );
    }

    getLessonById(id: number): Observable<Lesson | undefined> {
        return of(MOCK_LESSONS.find((l) => l.id === id));
    }

    getLessonsBySubjectAndLevel(subjectId: number, levelId: number): Observable<Lesson[]> {
        return of(
            MOCK_LESSONS
                .filter((l) => l.subjectId === subjectId && l.levelId === levelId)
                .sort((a, b) => a.order - b.order)
        );
    }

    /* ───────── Content ───────── */

    getLessonContent(lessonId: number): Observable<LessonContent | undefined> {
        return of(MOCK_LESSON_CONTENTS.find((c) => c.lessonId === lessonId));
    }

    /* ───────── Search ───────── */

    searchLessons(query: string): Observable<Lesson[]> {
        const q = query.toLowerCase();
        return of(
            MOCK_LESSONS.filter(
                (l) =>
                    l.title.toLowerCase().includes(q) ||
                    l.summary.toLowerCase().includes(q)
            )
        );
    }
}
