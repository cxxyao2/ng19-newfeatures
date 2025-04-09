import { Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { ParentChildComponent } from './components/parent-child/parent-child.component';
import { CounterCallerComponent } from './counter/counter-caller/counter-caller.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { PushMeComponent } from './components/push-me/push-me.component';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./components/login-form/login-form.component').then(m => m.LoginFormComponent),
    },
    {
        path: 'cart',
        loadComponent: () => import('./shopping-cart/cart/cart.component').then(m => m.CartComponent),
    },
    {
        path: 'products',
        component: ParentComponent,
    },
    {
        path: 'products/:id',
        component: ParentChildComponent,
    },
    {
        path: 'counter',
        component: CounterCallerComponent
    },
    {
        path: 'user-list',
        component: UserListComponent
    },
    {
        path: 'push-me',
        component: PushMeComponent
    },
    {
        path: 'template-outlet-demo',
        loadComponent: () => import('./components/template-outlet-demo/template-outlet-demo.component').then(m => m.TemplateOutletDemoComponent)
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
