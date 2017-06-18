import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MoviesComponent } from './movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesGridComponent } from './movies-grid/movies-grid.component';

import { MoviesService, SearchPipe } from './_shared/index';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        RouterModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        MoviesComponent,
        MoviesListComponent,
        MoviesGridComponent,
        SearchPipe
    ],
    providers: [MoviesService]
})
export class MoviesModule { }
