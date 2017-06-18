import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from '../_shared/index';

@Component({
  selector: 'movies-list-component',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})

export class MoviesListComponent implements OnInit {

  @Input() movies: Movie;
  @Output() movieClickEvt = new EventEmitter<Movie>();

  @Input() search: string;

  constructor() { }

  ngOnInit() {
  }

  movieClick(movie: Movie) {
    this.movieClickEvt.emit(movie);
  }

}
