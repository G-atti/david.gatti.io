import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
	selector: 'my-home',
	templateUrl: 'components/articles/article.component.html',
	styleUrls: ['components/articles/article.component.css']
})

export class ArticleComponent
{
	data = {};

	constructor(http: Http)
	{
		http.get("/articles")
			.map(data => data.json())
			.subscribe((data) => this.data = data);
	}

}