import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@app/services/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = inject(AuthService).getAuthToken();
  // Clone the request to add the authentication header.
  const newReq = req.clone({
    headers: req.headers.append('Authentication', 'Bearer ' + authToken),
  });
  return next(newReq);
};
