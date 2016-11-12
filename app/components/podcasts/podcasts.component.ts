import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
	selector: 'my-podcast',
	templateUrl: 'components/podcasts/podcasts.component.html',
	styleUrls: ['components/podcasts/podcasts.component.css']
})

export class PodcastsComponent
{
	data = {};

	constructor(http: Http)
	{
		http.get("/podcasts")
			.map(data => data.json())
			.subscribe((data) => this.data = data);
	}
}