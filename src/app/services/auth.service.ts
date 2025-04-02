import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getAuthToken(): string {
    // Logic to retrieve the authentication token
    return 'your-auth-token'; // Replace with actual token retrieval logic
  }
}
