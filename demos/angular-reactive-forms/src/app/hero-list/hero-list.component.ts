import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Hero } from '../data-model';
import { HeroService } from '../hero.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  isLoading = false;
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.isLoading = true;
    this.heroes = this.heroService.getHeroes()
                      // TODO: error handlong
                      .pipe(finalize((() => this.isLoading = false)));
    this.selectedHero = undefined;
  }

  select(hero: Hero) {
    this.selectedHero = hero;
  }

}
