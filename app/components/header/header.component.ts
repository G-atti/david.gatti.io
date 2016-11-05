import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	directives: [ROUTER_DIRECTIVES],
	selector: 'my-app',
	styleUrls: ['components/header/header.component.css'],
	templateUrl: 'components/header/header.component.html'
})

export class HeaderComponent
{
	constructor() {}
}
