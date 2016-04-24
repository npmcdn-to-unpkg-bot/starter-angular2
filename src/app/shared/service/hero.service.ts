import { Injectable } from 'angular2/core';

import { Hero } from '../model/hero';
import { HEROES } from './hero.mock';

@Injectable()
export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}

	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
			setTimeout(() => resolve(HEROES), 2000)
		)
	}

	getHero(id: number) {
		return Promise.resolve(HEROES).then(
			heroes => heroes.filter(hero => hero.id === id)[0]
		);
	}
}
