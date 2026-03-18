import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService, RoleOption } from '../../../../core/services/auth.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './register.html',
    styleUrl: './register.scss',
})
export class Register implements OnInit {
    fullName = '';
    email = '';
    password = '';
    confirmPassword = '';
    selectedRole = '';
    showPassword = false;
    isLoading = false;
    agreeTerms = false;
    errorMessage = '';

    private authService = inject(AuthService);
    private router = inject(Router);

    roles: RoleOption[] = [];

    ngOnInit(): void {
        this.authService.getAvailableRoles().subscribe({
            next: (roles) => {
                this.roles = roles;
            },
            error: () => {
                this.roles = [];
            }
        });
    }

    selectRole(role: string): void {
        this.selectedRole = this.authService.normalizeRole(role) || role;
    }

    togglePasswordVisibility(): void {
        this.showPassword = !this.showPassword;
    }

    get passwordsMatch(): boolean {
        return this.password === this.confirmPassword;
    }

    onSubmit(): void {
        if (!this.fullName || !this.email || !this.password || !this.selectedRole) return;
        if (!this.passwordsMatch || !this.agreeTerms) return;
        
        this.isLoading = true;
        this.errorMessage = '';

        const payload = {
            name: this.fullName,
            email: this.email,
            password: this.password,
            role: this.selectedRole
        };

        this.authService.register(payload).subscribe({
            next: (res: any) => {
                this.isLoading = false;
                this.router.navigate([this.authService.getDashboardRoute(res?.role)]);
            },
            error: (err: any) => {
                this.isLoading = false;
                this.errorMessage = err.message || "Erreur lors de l'inscription";
            }
        });
    }
}
