import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './register.html',
    styleUrl: './register.scss',
})
export class Register {
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

    roles = [
        { value: 'STUDENT', label: 'Étudiant', icon: 'school', desc: 'Je suis un élève ou étudiant' },
        { value: 'PARENT', label: 'Parent', icon: 'family_restroom', desc: "Je suis parent d'un élève" },
        { value: 'TEACHER', label: 'Enseignant', icon: 'person', desc: 'Je suis professeur/enseignant' },
    ];

    selectRole(role: string): void {
        this.selectedRole = role;
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
                const role = res.role.toUpperCase();
                if (role.includes('STUDENT')) this.router.navigate(['/dashboard/student']);
                else if (role.includes('TEACHER')) this.router.navigate(['/dashboard/teacher']);
                else if (role.includes('ADMIN')) this.router.navigate(['/dashboard/admin']);
                else this.router.navigate(['/dashboard/parent']);
            },
            error: (err: any) => {
                this.isLoading = false;
                this.errorMessage = err.message || "Erreur lors de l'inscription";
            }
        });
    }
}
