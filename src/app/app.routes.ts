import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./components/login-form/login-form.component').then(m => m.LoginFormComponent),
    },
    {
        path: 'cart',
        loadComponent: () => import('./shopping-cart/cart/cart.component').then(m => m.CartComponent),
    }
];
