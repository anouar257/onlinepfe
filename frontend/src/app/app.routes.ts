import { Routes } from '@angular/router';
import { GuestLayoutComponent } from './shared/layouts/guest-layout/guest-layout';
import { DashboardLayoutComponent } from './shared/layouts/dashboard-layout/dashboard-layout';

export const routes: Routes = [
    {
        path: '',
        component: GuestLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./features/home/pages/home/home').then((m) => m.Home),
                title: 'EduPlanet — Plateforme éducative en ligne',
            },
            {
                path: 'catalog',
                loadComponent: () => import('./features/catalog/pages/catalog/catalog').then((m) => m.Catalog),
                title: 'Bibliothèque — EduPlanet',
            },
            {
                path: 'subjects/:subjectId/levels/:levelId',
                loadComponent: () => import('./features/subject/pages/subject/subject').then((m) => m.SubjectPage),
                title: 'Matière — EduPlanet',
            },
            {
                path: 'lessons/:lessonId',
                loadComponent: () => import('./features/lesson/pages/lesson/lesson').then((m) => m.LessonPage),
                title: 'Leçon — EduPlanet',
            },
            {
                path: 'about',
                loadComponent: () => import('./features/about/pages/about/about').then((m) => m.About),
                title: 'À propos — EduPlanet',
            },
            {
                path: 'login',
                loadComponent: () => import('./features/auth/pages/login/login').then((m) => m.Login),
                title: 'Connexion — EduPlanet',
            },
            {
                path: 'register',
                loadComponent: () => import('./features/auth/pages/register/register').then((m) => m.Register),
                title: 'Inscription — EduPlanet',
            },
            {
                path: 'search',
                loadComponent: () => import('./features/search/pages/search-results/search-results').then((m) => m.SearchResults),
                title: 'Recherche — EduPlanet',
            },
            {
                path: 'contact',
                loadComponent: () => import('./features/contact/pages/contact/contact').then((m) => m.Contact),
                title: 'Contact — EduPlanet',
            },
            {
                path: 'faq',
                loadComponent: () => import('./features/faq/pages/faq/faq').then((m) => m.Faq),
                title: 'FAQ — EduPlanet',
            },
            {
                path: 'pricing',
                loadComponent: () => import('./features/pricing/pages/pricing/pricing').then((m) => m.Pricing),
                title: 'Tarifs et Abonnements — EduPlanet',
            },
            {
                path: 'tutors',
                loadComponent: () => import('./features/tutors/pages/tutors/tutors').then((m) => m.Tutors),
                title: 'Professeurs Particuliers — EduPlanet',
            }
        ]
    },
    {
        path: 'dashboard',
        component: DashboardLayoutComponent,
        children: [
            {
                path: 'parent',
                loadComponent: () => import('./features/dashboard/parent/pages/parent-dashboard/parent-dashboard').then((m) => m.ParentDashboard),
                title: 'Tableau de bord Parent — EduPlanet',
            },
            {
                path: 'parent/grades',
                loadComponent: () => import('./features/dashboard/parent/pages/parent-grades/parent-grades').then((m) => m.ParentGrades),
                title: 'Assiduité & Notes — EduPlanet',
            },
            {
                path: 'parent/billing',
                loadComponent: () => import('./features/dashboard/parent/pages/parent-billing/parent-billing').then((m) => m.ParentBilling),
                title: 'Abonnements — EduPlanet',
            },
            {
                path: 'student',
                loadComponent: () => import('./features/dashboard/student/pages/student-dashboard/student-dashboard').then((m) => m.StudentDashboard),
                title: 'Tableau de bord Étudiant — EduPlanet',
            },
            {
                path: 'student/courses',
                loadComponent: () => import('./features/dashboard/student/pages/student-courses/student-courses').then((m) => m.StudentCourses),
                title: 'Mes Cours — EduPlanet',
            },
            {
                path: 'student/schedule',
                loadComponent: () => import('./features/dashboard/student/pages/student-schedule/student-schedule').then((m) => m.StudentSchedule),
                title: 'Mon Planning — EduPlanet',
            },
            {
                path: 'teacher',
                loadComponent: () => import('./features/dashboard/teacher/pages/teacher-dashboard/teacher-dashboard').then((m) => m.TeacherDashboard),
                title: 'Tableau de bord Professeur — EduPlanet',
            },
            {
                path: 'teacher/courses',
                loadComponent: () => import('./features/dashboard/teacher/pages/teacher-courses/teacher-courses').then((m) => m.TeacherCourses),
                title: 'Gestion des Cours — EduPlanet',
            },
            {
                path: 'admin',
                loadComponent: () => import('./features/dashboard/admin/pages/admin-dashboard/admin-dashboard').then((m) => m.AdminDashboard),
                title: 'Super Administration — EduPlanet',
            },
            {
                path: 'admin/users',
                loadComponent: () => import('./features/dashboard/admin/pages/admin-users/admin-users').then((m) => m.AdminUsers),
                title: 'Gestion des Utilisateurs — EduPlanet',
            }
        ]
    },
    {
        path: '**',
        component: GuestLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./features/error/pages/not-found/not-found').then((m) => m.NotFound),
                title: '404 — EduPlanet',
            }
        ]
    }
];
