import { Injectable } from '@angular/core';
import { Hero, heroes } from './data-model';
import { Observable, of } from '../../node_modules/rxjs';
import { delay } from '../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  delayMs = 500;

  // Fake server get
  getHeroes(): Observable<Hero[]> {
    return of(heroes).pipe(delay(this.delayMs));
  }

  // Fake server update
  updateHero(hero: Hero): Observable<Hero> {
    const oldHero = heroes.find(h => h.id === hero.id);
    const newHero = Object.assign(oldHero, hero);
    return of(newHero).pipe(delay(this.delayMs));
  }
}
