import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Hero } from '../../shared/model/hero';
import { HeroService } from '../../shared/service/hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/component/hero/hero-detail.html',
	styleUrls: ['app/component/hero/hero-detail.css'],
	inputs: ['hero']
})
export class HeroDetailComponent {
	hero: Hero;

	constructor(
		private _heroService: HeroService,
		private _routeParams: RouteParams
	) {
	}

	ngOnInit() {
		let id = Number(this._routeParams.get('id'));
		this._heroService.getHero(id).then(hero => this.hero = hero);
	}

	goBack() {
		window.history.back();
	}
}
