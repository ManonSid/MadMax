import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  articles: Article[];
  faEdit = faEdit;
  faTrash = faTrash;
  
  constructor(private articleService: ArticleService, private toastr: ToastrService) { }

  ngOnInit() {
    this.articles=this.articleService.articles;
  }
  delateArticle(article:Article){
    this.articles = this.articleService.delateArticle(article);
    this.toastr.info('Article supprimé avec succès',
    'Ok Brooo', {closeButton: true,
      positionClass: 'toast-bottom-full-width', progressBar: true});
  }

}
