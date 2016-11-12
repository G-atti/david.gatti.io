import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
	selector: 'my-home',
	templateUrl: 'components/technical_articles/technical_articles.component.html',
	styleUrls: ['components/technical_articles/technical_articles.component.css']
})

export class TechnicalArticlesComponent
{
	data = {};

	constructor(http: Http)
	{
		http.get("/technical_articles")
			.map(data => data.json())
			.subscribe((data) => this.data = data);
	}
}