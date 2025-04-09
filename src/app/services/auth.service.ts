import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getAuthToken(): string {
    // Logic to retrieve the authentication token
    return 'your-auth-token'; // Replace with actual token retrieval logic
  }

  isAuthenticated(): boolean {
    // Logic to check if the user is authenticated
    return !!this.getAuthToken(); // Replace with actual authentication check logic
  }
}
