import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
	selector: 'my-home',
	templateUrl: 'components/home/home.component.html',
	styleUrls: ['components/home/home.component.css']
})

export class HomeComponent
{
	home = {};

	constructor(http: Http)
	{
		http.get("/home")
			.map(data => data.json())
			.subscribe((data) => this.home = data);
	}
}