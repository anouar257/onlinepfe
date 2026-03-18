import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './login.html',
    styleUrl: './login.scss',
})
export class Login {
    email = '';
    password = '';
    showPassword = false;
    isLoading = false;
    errorMessage = '';

    private authService = inject(AuthService);
    private router = inject(Router);

    togglePasswordVisibility(): void {
        this.showPassword = !this.showPassword;
    }

    onSubmit(): void {
        if (!this.email || !this.password) return;
        this.isLoading = true;
        this.errorMessage = '';

        this.authService.login({ email: this.email, password: this.password }).subscribe({
            next: (res: any) => {
                this.isLoading = false;
                this.router.navigate([this.authService.getDashboardRoute(res?.role)]);
            },
            error: (err: any) => {
                this.isLoading = false;
                this.errorMessage = err.message || 'Identifiants incorrects';
            }
        });
    }
}
