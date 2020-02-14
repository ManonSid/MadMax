import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { RandomColorService } from 'src/app/services/random-color.service';
import { ArticleService } from 'src/app/services/article.service';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  btnClicked= false;
  favoriTeam: string;
  classement= ['Asm', 'Brasil', 'Juventus'];
  articles: Article [];
  nbClick=0;
  color: string;
  isLoading: boolean;
  faSpinner = faSpinner;

  

  constructor(private articleService: ArticleService) {
  }
  
  ngOnInit() {
   this.isLoading = true;
   return this.articleService.getArticles().subscribe((data: Article[]) => {
   this.articles = data;
   this.isLoading = false;
  });
}

  changeBtnClicked() {
    this.favoriTeam ="Juventus";
  }
  vote($event) {
    this.nbClick += 1;
  }
}

