import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'movies', loadChildren: 'app/movies/movies.module#MoviesModule' },
    { path: '', redirectTo: '/movies', pathMatch: 'full' }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);