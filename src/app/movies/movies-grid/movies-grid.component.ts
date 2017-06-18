import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from '../_shared/index';

@Component({
  selector: 'movies-grid-component',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit {

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
