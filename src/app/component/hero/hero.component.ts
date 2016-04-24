import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from '../../shared/model/hero';
import { HeroService } from '../../shared/service/hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/component/hero/hero.html',
	styleUrls: ['app/component/hero/hero.css'],
	directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;

	constructor(
		private _router: Router,
		private _heroService: HeroService
	) {
	}

	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}

	gotoDetail() {
		this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}
}
