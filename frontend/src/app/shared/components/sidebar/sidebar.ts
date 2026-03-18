import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent implements OnInit {
    currentRole: string = 'PARENT';
    menuItems: any[] = [];

    parentMenu = [
        { label: 'Tableau de bord', icon: 'dashboard', route: '/dashboard/parent' },
        { label: 'Mes Enfants', icon: 'child_care', route: '/dashboard/parent/children' },
        { label: 'Assiduité & Notes', icon: 'bar_chart', route: '/dashboard/parent/grades' },
        { label: 'Abonnement', icon: 'credit_card', route: '/dashboard/parent/billing' },
        { label: 'Paramètres', icon: 'settings', route: '/dashboard/parent/settings' },
    ];

    studentMenu = [
        { label: 'Mon Espace', icon: 'dashboard', route: '/dashboard/student' },
        { label: 'Mes Cours', icon: 'menu_book', route: '/dashboard/student/courses' },
        { label: 'Mon Planning', icon: 'calendar_today', route: '/dashboard/student/schedule' },
        { label: 'Devoirs & Tests', icon: 'assignment', route: '/dashboard/student/assignments' },
        { label: 'Paramètres', icon: 'settings', route: '/dashboard/student/settings' },
    ];

    teacherMenu = [
        { label: 'Aperçu', icon: 'dashboard', route: '/dashboard/teacher' },
        { label: 'Gestion Cours', icon: 'edit_document', route: '/dashboard/teacher/courses' },
        { label: 'Mes Élèves', icon: 'groups', route: '/dashboard/teacher/students' },
        { label: 'Revenus', icon: 'account_balance_wallet', route: '/dashboard/teacher/revenue' },
        { label: 'Média', icon: 'perm_media', route: '/dashboard/teacher/media' },
    ];

    adminMenu = [
        { label: 'Statistiques', icon: 'insights', route: '/dashboard/admin' },
        { label: 'Utilisateurs', icon: 'manage_accounts', route: '/dashboard/admin/users' },
        { label: 'Catalogue', icon: 'library_books', route: '/dashboard/admin/catalog' },
        { label: 'Finances', icon: 'payments', route: '/dashboard/admin/finance' },
        { label: 'Configuration', icon: 'settings', route: '/dashboard/admin/config' },
    ];

    constructor(private router: Router, private authService: AuthService) {
        this.updateMenu(this.router.url, this.authService.getRole());
    }

    ngOnInit() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: any) => {
            this.updateMenu(event.urlAfterRedirects, this.authService.getRole());
        });
    }

    private updateMenu(_url: string, userRole: string) {
        const normalizedRole = this.authService.normalizeRole(userRole);

        if (normalizedRole === 'STUDENT') {
            this.currentRole = this.authService.getRoleLabel('STUDENT');
            this.menuItems = this.studentMenu;
            return;
        }

        if (normalizedRole === 'TEACHER') {
            this.currentRole = this.authService.getRoleLabel('TEACHER');
            this.menuItems = this.teacherMenu;
            return;
        }

        if (normalizedRole === 'ADMIN') {
            this.currentRole = this.authService.getRoleLabel('ADMIN');
            this.menuItems = this.adminMenu;
            return;
        }

        this.currentRole = this.authService.getRoleLabel('PARENT');
        this.menuItems = this.parentMenu;
    }
}
