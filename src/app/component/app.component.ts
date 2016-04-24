import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeroService } from '../shared/service/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero/hero-detail.component';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a [routerLink]="['Dashboard']">Dashboard</a>
			<a [routerLink]="['Heroes']">Heroes</a>
		</nav>
		<router-outlet>
	`,
	styleUrls: ['app/component/app.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		HeroService
	]
})
@RouteConfig([
	{
		path: '/',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	},
	{
		path: '/detail/:id',
		name: 'HeroDetail',
		component: HeroDetailComponent
	}
])
export class AppComponent {
	title = 'Tour of Heroes';
}
