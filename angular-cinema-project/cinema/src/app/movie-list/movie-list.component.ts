import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Observable<Movie[]> = new Observable<Movie[]>();

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  getMovies(): void {
    this.movies = this.httpService.getMovieList();
  }

  deleteMovie(movie: Movie): any {
    this.httpService.deleteMovie(movie.id).subscribe(
      () => this.movies = this.httpService.getMovieList()
    );
  }

}
