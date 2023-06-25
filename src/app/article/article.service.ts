import { Injectable } from '@angular/core';
import { ArticleStore } from './article.store';
import { map} from 'rxjs/operators'
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private articleStore: ArticleStore ) { }
  articles$ = this.articleStore.getArticles();

  getArticles() {
    return this.articles$.pipe(
      map(articles => articles.sort((a, b) => b.votes - a.votes))
    );
  }

  addArticle(newArticle: Article): void {
    this.articles$.next([...this.articles$.value, newArticle]);
  }

  updateVote(id: string, value: number) {
    const currentArticles = this.articles$.value ?? []
    const article = currentArticles.find(a => a.id === id);
    article && (article.votes += value);
    this.articles$.next([...currentArticles]);
  }
}
