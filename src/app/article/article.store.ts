import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { Article } from "./article.model";

@Injectable({
  providedIn: 'root'
})
export class ArticleStore {
  articles$ = new BehaviorSubject<Article[]>(
    [
      new Article('CodergenZ', 'CodergenZ', 'https://codergenz.net', 10),
      new Article('Angular', 'Angular', 'https://angular.io', 3)
    ]
  );

  getArticles() {
    return this.articles$;
  }
}
