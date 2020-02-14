import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  delateArticle(article: Article): Article[] {
    throw new Error("Method not implemented.");
  }
  articles: Article[];
 apiURL = 'http://localhost:3000/article';
 httpOptions = {
 headers: new HttpHeaders({
 'Content-Type': 'application/json'
 })
 }; 
 
  constructor(private http: HttpClient ) {
    this.articles = [];
    }
    /*this.articles = [new Article(1,'Le cerveau','La moelle épinière est la principale voie de communication entre le cerveau et le reste de l\'organisme.','https://previews.123rf.com/images/decade3d/decade3d1307/decade3d130700052/20869502-anatomie-du-cerveau-moelle-%C3%A9pini%C3%A8re.jpg'),
                      new Article (2,'Le Greonendael','Le Groenendael est une race de chien née au début du XXᵉ siècle. L\'élevage a commencé par hasard vers 1890. Nicolas Rose, propriétaire du café restaurant "le Château de Groenendael", près de Bruxelles, éleva un chiot noir et obtint une femelle du même type. Ce couple fonda la race.',
                      'https://media.ooreka.fr/public/image/3-305495-2649-medium-13120821.jpg'),
                      new Article (3,'Angular','Angular (communément appelé "Angular 2+" ou "Angular v2 et plus")2,3 est un cadriciel (framework) côté client open source basé sur TypeScript dirigée par l\'équipe du projet Angular à Google et par une communauté de particuliers et de sociétés. Angular est une réécriture complète de AngularJS, cadriciel construit par la même équipe.',
                      'https://i.udemycdn.com/course/750x422/756150_c033_2.jpg')
  ];*/

  getArticleById(id: number): Article{
    return this.articles.filter(article => article.id === id)[0];
  }
 
  edit(articleForm: Article): void {
    this.articles
      .filter(
        article => article.id === articleForm.id)[0]
      = articleForm;
  }
  

handleError(error) {
  let errorMessage = '';
  if ( error.error instanceof ErrorEvent ) {
  // Get client-side error
  errorMessage = error.error.message;
  } else {
  // Get server-side error
  errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
 } 
 getArticles(): Observable<Article[]> {
  return this.http.get<Article[]>(this.apiURL)
  .pipe(
  retry(1),
  catchError(this.handleError)
  );
 } 
 getOneArticle(id: number): Observable<Article> {
  return this.http.get<Article>(this.apiURL + '/' + id)
  .pipe(
  retry(1),
  catchError(this.handleError)
  );
 } 
 addArticle(article: Article): Observable<Article> {
  return this.http.post<Article>(this.apiURL ,article, this.httpOptions).pipe(
  catchError(this.handleError)
  );
 } 
 updateArticle(article: Article) {
  return this.http.put<Article>(this.apiURL + '/' + article.id ,article, this.httpOptions).pipe(
  catchError(this.handleError)
  );
 } 
 deleteArticle(id: number): Observable<Article> {
  return this.http.delete<Article>(this.apiURL + '/' + id)
  .pipe(
  retry(1),
  catchError(this.handleError)
  );
 } 

}
