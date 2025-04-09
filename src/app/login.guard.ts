import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand } from '@angular/router';
import { AuthService } from './services/auth.service';

export const loginGuard: CanActivateFn = (route, state) => {

  const redirectUrl = route.queryParams['redirectUrl'] || '/login';
  const authService = inject(AuthService);

  if (authService.isAuthenticated()) {
    // do not add "login?redicturl=..." to the history stack
    return new RedirectCommand(redirectUrl, { replaceUrl: true });
  }

  return true;
};
