import { HeroesService } from './../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroes: any[] = [];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {

     }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      console.log(params['termino']);
      this.heroes = this._heroesService.buscarHeroes( params['termino']);
      console.log(this.heroes);
    });
  }

}

