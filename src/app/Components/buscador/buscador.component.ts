import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../Services/heroes.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes:any[] = []
  parametros:any = ''
  constructor( private activatedRoute:ActivatedRoute,
               private heroeservice:HeroesService,
               private router:Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      console.log(params)
      this.heroes = this.heroeservice.buscarHeroes(params['termino']);
      this.parametros = params['termino']
      console.log(this.heroes)
    })
  }
  verheroe(idx:number){
    this.router.navigate(['heroe', idx]);
  }

}

