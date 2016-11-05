import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
	selector: 'my-home',
	templateUrl: 'components/software_projects/software_projects.component.html',
	styleUrls: ['components/software_projects/software_projects.component.css']
})

export class SoftwareProjectsComponent
{
	users: {};

	constructor(http: Http)
	{
		http.get("/users")
			.map(data => data.json())
			.subscribe((data) => this.users = data);
	}
}