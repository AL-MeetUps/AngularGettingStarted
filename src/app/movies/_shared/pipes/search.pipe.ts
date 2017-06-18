import { Pipe, PipeTransform } from '@angular/core';

import { IMovie } from '../index';

@Pipe({ name: 'searchMovie' })

export class SearchPipe implements PipeTransform {

    transform(movies: IMovie[], search: string): IMovie[] {

        if (!movies || !search) {
            return movies;
        }
        search = search.trim().toLowerCase();
        return movies.filter((movie) =>
            !!~movie.title.toLowerCase().indexOf(search) ||
            !!~movie.year.toString().indexOf(search));
    }
}