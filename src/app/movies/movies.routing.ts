import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent }
];

export const MovieRoutes: ModuleWithProviders = RouterModule.forChild(routes);