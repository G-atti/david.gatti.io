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
	data = {};

	constructor(http: Http)
	{
		http.get("/software_projects")
			.map(data => data.json())
			.subscribe((data) => this.data = data);
	}
}