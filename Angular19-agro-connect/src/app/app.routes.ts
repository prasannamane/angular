import { Routes } from '@angular/router';
import { RegisterListComponent } from '../component/register-list/register-list.component';
import { RegisterComponent } from '../component/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: RegisterListComponent },
    { path: 'register', component: RegisterComponent }
];
