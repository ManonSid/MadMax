import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  articleForm: Article;
  

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router,
    private toastr: ToastrService) { }
  ngOnInit() {
    this.articleForm =
      this.articleService.
        getArticleById(+this.route.snapshot.paramMap.get('id'));
  }
  onSubmit(){
    this.articleService.edit (this.articleForm);
    this.toastr.info('Bravo',
    'Article modifié avec succès', {closeButton: true,
      positionClass: 'toast-bottom-full-width', progressBar: true});
  this.router.navigate(['/admin']);

  }

}

