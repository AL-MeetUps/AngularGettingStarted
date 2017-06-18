import { IMovie } from '../index';
export class Movie implements IMovie {

    public id: number;
    public title: string;
    public poster: string;
    public year: number;

    constructor(_movie?: IMovie) {
        this.id = _movie && _movie.id || 0;
        this.title = _movie && _movie.title || '';
        this.poster = _movie && _movie.poster || '';
        this.year = _movie && _movie.year || 0;
    }
}