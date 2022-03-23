import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/models/hero'
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // Variabli che passo alla view
  heroes: Hero[] = [];
  selectedHero?: Hero;
 
  // END: Variabli che passo alla view

  constructor(
    private heroService: HeroService, 
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.addMessage('HeroesComponent: Selected hero id=${hero.id}');
  }
  
  getHeroes(): void{
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
