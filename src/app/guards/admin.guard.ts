import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {

  const service = inject(AuthService);
  const router = inject(Router);
  if (service.authenticated()) {    
    if (!service.isAdmin()) {
      router.navigate(['/forbidden'])
      return false;
    }
    return true;
  }
  router.navigate(['/login']);
  return false;

};
