export class Article {
  title: string;
  votes: number;
  link: string;
  id: string;

  constructor(id: string,  title: string, link: string, votes: number) {
    this.title = title;
    this.link = link;
    this.votes = votes ?? 0;
    this.id = id;
  }
}
