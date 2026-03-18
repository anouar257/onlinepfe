import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../../../core/services/course.service';
import { Lesson } from '../../../../core/models/lesson.model';
import { Subject as SubjectModel } from '../../../../core/models/subject.model';

@Component({
    selector: 'app-search-results',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './search-results.html',
    styleUrl: './search-results.scss',
})
export class SearchResults implements OnInit {
    query = '';
    results: Lesson[] = [];
    subjects: SubjectModel[] = [];
    isSearching = false;

    constructor(
        private courseService: CourseService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.courseService.getSubjects().subscribe((s) => (this.subjects = s));
        this.route.queryParams.subscribe((params) => {
            if (params['q']) {
                this.query = params['q'];
                this.search();
            }
        });
    }

    search(): void {
        if (!this.query.trim()) return;
        this.isSearching = true;
        this.courseService.searchLessons(this.query).subscribe((results) => {
            this.results = results;
            this.isSearching = false;
        });
    }

    onSearch(): void {
        this.router.navigate(['/search'], { queryParams: { q: this.query } });
    }

    getSubjectName(subjectId: number): string {
        const subject = this.subjects.find((s) => s.id === subjectId);
        return subject ? subject.name : '';
    }

    getSubjectColor(subjectId: number): string {
        const subject = this.subjects.find((s) => s.id === subjectId);
        return subject ? subject.colorCode : '#64748b';
    }
}
