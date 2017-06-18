// As Routing Module, it needs to import NgModule, RouterModule & Routes
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Add the stateful/smart components here
import { MoviesComponent } from './movies/movies.component';
// Set the routes up
const appRoutes: Routes = [
    { path: 'movies', component: MoviesComponent }, // route - component
    { path: '', redirectTo: '/movies', pathMatch: 'full' }, // redirection
    { path: '**', component: MoviesComponent } // 404 not found
];
// Declaration of the Routing Module
@NgModule({
    imports: [
        // Loads the routes set above and use hash stragegy
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        // Export this configuration to be loaded on appModule
        RouterModule
    ]
})
// Expose the name for the Routing Module
export class AppRoutingModule { }