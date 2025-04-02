import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, count, delay, mergeMap, of, retry, retryWhen, throwError, timer } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const maxRetries = 3;
  const delayMs = 1000;
  const router: Router = inject(Router); // Inject the Router service


  return next(req).pipe(
    // retryWhen is deprecated, use retry instead
    // retryWhen(errors => errors.pipe(
    //   mergeMap((error: HttpErrorResponse, retryCount: number) => {
    //     if (retryCount < maxRetries && shouldRetry(error)) {
    //       console.warn(`Retrying request... Attempt ${retryCount + 1} of ${maxRetries}`);
    //       return timer(delayMs);
    //     }
    //     return throwError(() => error);
    //   })
    // )),

    retry({
      count: maxRetries,
      delay: (error: HttpErrorResponse, retryCount: number) => {
        console.warn(`Retrying request... Attempt ${retryCount + 1} of ${maxRetries}`);
        return timer(delayMs); // Delay before retrying
      },
      resetOnSuccess: true, // Reset the retry count on success,
    }),

    // Error handling logic
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.error('Unauthorized access - redirecting to login page');
        router.navigate(['/login']);
      }
      else if (error.status === 404) {
        console.error('Resource not found - redirecting to not-found page');
        router.navigate(['/not-found']);
      } else if (error.status === 500) {
        console.error('Server error - please try again later');
      }
      else {
        console.error('An error occurred:', error.message);
      }

      return throwError(() => error); // Rethrow the error to propagate it further
    })
  );
};


export function shouldRetry(error: HttpErrorResponse): boolean {

  return error.status === 0 || error.status === 500; // Example: Retry for server errors (5xx)
}
