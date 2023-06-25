import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { Observable, of } from 'rxjs';
import { ArticleService } from './article/article.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private articleService: ArticleService) {
  }
  articles$ = this.articleService.getArticles();

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    const newArticle = new Article(
      new Date().getTime().toString(),
      title.value,
      link.value,
      0,
    );
    this.articleService.addArticle(newArticle);
    // reset value
    title.value = '';
    link.value = '';
    // focus input
    title.focus();
    return false;
  }
}
