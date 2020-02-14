import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.css']
})
export class FullArticleComponent implements OnInit {
  article: Article;
  isLoading: boolean;
  //Activated route permet de récupérer ls informations
  //de la requete de la page a afficher
  constructor(private route: ActivatedRoute,private articleService: ArticleService) { }

  ngOnInit() {
    console.log('id',+this.route.snapshot.paramMap.get('id') )
    this.isLoading = true;
    this.articleService.getOneArticle(+this.route.snapshot.paramMap.get('id')).subscribe((data:
   Article) => {
    this.article = data;
    this.isLoading = false;
    });

}
}