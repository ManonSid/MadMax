import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  articleForm: Article;
  
  
  constructor(private articleService: ArticleService, private router: Router,
              private toastr: ToastrService ) { }

  ngOnInit() {
    this.articleForm= new Article();
  }
  onSubmit() {
    this.articleService.addArticle(this.articleForm).subscribe(then => {
      this.toastr.success('Article ajouter!!!');
    this.router.navigate(['/admin']);
    });
   }
  

}

