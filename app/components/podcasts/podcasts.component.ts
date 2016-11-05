import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'my-about',
	templateUrl: 'components/podcasts/podcasts.component.html',
	styleUrls: ['components/podcasts/podcasts.component.css']
})

export class PodcastsComponent
{
	param: string;

	constructor(private params: ActivatedRoute)
	{
		params.params
			.subscribe((data: { id?: string}) => this.param = data.id);
	}
}