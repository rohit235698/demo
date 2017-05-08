import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';

export const MODULE_ROUTES: Route[] =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
]

export const MODULE_COMPONENTS = [
    DashboardComponent, HomeComponent
]
