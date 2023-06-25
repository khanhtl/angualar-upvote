import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'app-article m-3';
  @Input() article: Article;
  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
  }

  voteUp() {
    this.articleService.updateVote(this.article.id, 1);
  }

  voteDown() {
    this.articleService.updateVote(this.article.id, -1);
  }

}
