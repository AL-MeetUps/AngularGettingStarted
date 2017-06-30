// tslint:disable:max-line-length
import { Injectable } from '@angular/core';

import { Movie } from '../index';

@Injectable()
export class MoviesService {

    constructor() { }

    getAll(): Movie[] {
        return [
            new Movie({ id: 1, title: 'The Mummy', year: 2017, poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5NzM5NTgxN15BMl5BanBnXkFtZTgwNDEyNTk4MTI@._V1_SY1000_CR0,0,631,1000_AL_.jpg' }),
            new Movie({ id: 2, title: 'Pirates of the Caribbean: Dead Men Tell No Tales', year: 2017, poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg' }),
            new Movie({ id: 3, title: 'BayWatch', year: 2017, poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTA4MjQ0ODQzNF5BMl5BanBnXkFtZTgwNzA5NjYzMjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg' }),
            new Movie({ id: 4, title: 'American Made', year: 2017, poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNzUwMjk1Nl5BMl5BanBnXkFtZTgwNDkwODI1MjI@._V1_SY1000_CR0,0,675,1000_AL_.jpg' }),
            new Movie({ id: 5, title: 'Justice League', year: 2017, poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI2NjI2MDQ0NV5BMl5BanBnXkFtZTgwMTc1MjAwMjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg' }),
            new Movie({ id: 6, title: 'Life', year: 2017, poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzAwMmQxNTctYjVmYi00MDdlLWEzMWUtOTE5NTRiNDhhNjI2L2ltYWdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX675_AL_.jpg' }),
            new Movie({ id: 7, title: 'Guardians of the Galaxy Vol. 2', year: 2017, poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg' }),
            new Movie({ id: 8, title: 'Alien: Covenant', year: 2017, poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzI5MzM3MzkxNF5BMl5BanBnXkFtZTgwOTkyMjI4MTI@._V1_SY1000_CR0,0,673,1000_AL_.jpg' }),
            new Movie({ id: 9, title: 'Transformers: The Last Knight', year: 2017, poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk3OTI3MDk4N15BMl5BanBnXkFtZTgwNDg2ODIyMjI@._V1_.jpg' }),
            new Movie({ id: 10, title: 'Logan', year: 2017, poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODQwNTg4OV5BMl5BanBnXkFtZTgwMTk4MTAzMjI@._V1_.jpg' }),
            new Movie({ id: 11, title: 'Suicide Squad', year: 2016, poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg' }),
            new Movie({ id: 12, title: 'The Mummy', year: 1999, poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BM2FmZTk5NDUtMzU0Yy00NzgzLWI0Y2MtMjExOWJmMmFlNzk1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,665,1000_AL_.jpg' }),
            new Movie({ id: 13, title: 'Pirates of the Caribbean: The Curse of the Black Pearl', year: 2013, poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg' }),
            new Movie({ id: 14, title: 'Star Wars: The Last Jedi', year: 2017, poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTE5NzYyNjM0Ml5BMl5BanBnXkFtZTgwNjk4MDIwMjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg' })
        ]
    }
}
