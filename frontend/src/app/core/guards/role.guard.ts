import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    return router.createUrlTree(['/login']);
  }

  const expectedRole = String(route.data?.['role'] || '');
  if (!expectedRole) {
    return true;
  }

  const currentRole = authService.normalizeRole(authService.getRole());
  const normalizedExpected = authService.normalizeRole(expectedRole);

  if (currentRole && normalizedExpected && currentRole === normalizedExpected) {
    return true;
  }

  return router.createUrlTree([authService.getDashboardRoute(authService.getRole())]);
};
