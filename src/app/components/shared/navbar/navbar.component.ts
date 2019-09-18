import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
    heroes: Heroe[] = [];
    constructor(
        private _heroesService: HeroesService,
        private router: Router
    ) {

    }
    ngOnInit() {
        //this.heroes = this._heroesService.buscarHeroes();
    //console.log(this.heroes);
    }

    buscarHeroe( termino: string) {
        this.router.navigate( ['/search', termino ] );
    }
}
