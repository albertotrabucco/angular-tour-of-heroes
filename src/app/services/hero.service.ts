import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from '../models/hero';
import { HEROESMOCKDATA } from '../mock-data/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //variabili di classe

  constructor(private messageService: MessageService) { }

  //metodi di classe
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROESMOCKDATA);
    this.messageService.addMessage('HeroService: fetched heroes');
    return heroes;
  }

}
