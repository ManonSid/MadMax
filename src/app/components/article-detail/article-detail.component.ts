import {Component, Input, OnInit, Output} from '@angular/core';
import { Article } from 'src/app/model/article';
import{EventEmitter} from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  @Input() article: Article;
  @Output() voteEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  todayDate = new Date;
  isLoading: boolean;
  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

   } 
  vote() {
    this.voteEmitter.emit(true);
  }
  onSubmit() {
    this.articleService.updateArticle(this.article).subscribe(then => {
    this.router.navigate(['/articles']);
    }); 
  }
}
