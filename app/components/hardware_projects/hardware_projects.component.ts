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
	data = {};

	constructor(http: Http)
	{
		http.get("/hardware_projects")
			.map(data => data.json())
			.subscribe((data) => this.data = data);
	}
}