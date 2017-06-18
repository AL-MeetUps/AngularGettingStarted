import { Component, OnInit } from '@angular/core';

import { MoviesService, Movie } from './_shared/index';

@Component({
  selector: 'movies-component',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies: Movie[];
  public Search: string;
  public Checked: boolean;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movies = this._moviesService.getAll(); // Mock Data
    this._moviesService.getAllApi().subscribe((weather) => console.log(weather)); // Call to API Data
  }

  movieClicked(movie: Movie) {
    console.log(movie);
  }
}