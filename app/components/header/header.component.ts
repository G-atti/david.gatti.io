import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
	directives: [ROUTER_DIRECTIVES],
	selector: 'my-app',
	styleUrls: ['components/header/header.component.css'],
	templateUrl: 'components/header/header.component.html'
})

export class HeaderComponent
{
	users: {};

	constructor(http: Http)
	{
		http.get("/home")
			.map(data => data.json())
			.subscribe((data) => this.users = data);
	}
}
