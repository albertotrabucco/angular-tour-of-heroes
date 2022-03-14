import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROESMOCKDATA } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  //hero: Hero ={
  //  id: 1,
  //  name: 'Windstorm'
  //};
  heroes: Hero[] = HEROESMOCKDATA;
  selectedHero?: Hero;


  constructor() { }

  ngOnInit(): void {
  }
  
  onSelect(pippo: Hero){
    this.selectedHero = pippo;
  }

}
