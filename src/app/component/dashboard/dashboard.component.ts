import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from '../../shared/model/hero';
import { HeroService } from '../../shared/service/hero.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/component/dashboard/dashboard.html',
	styleUrls: ['app/component/dashboard/dashboard.css']
})
export class DashboardComponent implements OnInit {
	heroes: Hero[];

	constructor(
		private _router: Router,
		private _heroService: HeroService
	) {
	}

	ngOnInit() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
	}

	gotoDetail(hero: Hero) {
		let link = ['HeroDetail', { id: hero.id }];
		this._router.navigate(link);
	}
}
