import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HeroesComponent } from './heroes/heroes.component';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id ==id)!;
    this.messageService.add(`we are getting hero with id of ${id}`);
    return of(hero);
  }

  
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('welcome to my heroes');
    return heroes;
  }
}
