import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
	selector: 'my-home',
	templateUrl: 'components/hardware_projects/hardware_projects.component.html',
	styleUrls: ['components/hardware_projects/hardware_projects.component.css']
})

export class HardwareProjectsComponent
{
	users: {};

	constructor(http: Http)
	{
		http.get("/users")
			.map(data => data.json())
			.subscribe((data) => this.users = data);
	}
}