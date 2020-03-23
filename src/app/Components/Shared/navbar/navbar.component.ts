import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../Services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private heroService:HeroesService,
               private router:Router
    ) { }

  ngOnInit(): void {
  }
  buscarheroe(termino:string){
      this.router.navigate(['/buscador', termino]);
  }

}
