import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient , private Router:Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.gettheatreMovies();
    this.getpopularMovies();
  }

  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
      this.trendingMovies = movies;
     
    })
  }

  gettheatreMovies() {
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies) => {
      this.theatreMovies = movies;

    })
  }


  getpopularMovies() {
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies) => {
      this.popularMovies = movies;
      
    })
  }

goToMovie(type:string , id:string){
this.Router.navigate(['movie',type,id]);
}

}
