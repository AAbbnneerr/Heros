import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../Services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = {};
  company:any = false

  constructor( private activatedRoute:ActivatedRoute,
               private heroeService:HeroesService
    ) {

    this.activatedRoute.params.subscribe(params =>{
      console.log(params['id']);
      this.heroe = heroeService.getHeroe(params['id']);
      console.log(this.heroe);
      if(this.heroe.casa == 'Marvel'){
        this.company = true;
      }
    });
   }

  ngOnInit(): void {
  }

}
