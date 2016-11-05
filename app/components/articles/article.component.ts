import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'my-about',
	templateUrl: 'components/articles/article.component.html',
	styleUrls: ['components/articles/article.component.css']
})

export class ArticleComponent
{
	param: string;

	constructor(private params: ActivatedRoute)
	{
		params.params
			.subscribe((data: { id?: string}) => this.param = data.id);
	}
}