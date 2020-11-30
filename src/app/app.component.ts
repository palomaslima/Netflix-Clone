import { Component } from '@angular/core';
import { TitulosService } from 'src/app/services/titulos.service';
import { Titulo } from './models/titulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix';

  titulo = {} as Titulo;
  titulos: Titulo[];

  titulosSerie = [];
  titulosFilme = [];
  titulosOriginais = [];

  constructor(private titulosService:TitulosService) { }

  ngOnInit(){
    this.getTitulos();
  }

  getTitulos(){
    this.titulosService.getTitulos().subscribe((titulos: Titulo[]) => {
      this.titulos = titulos;

      for(let i of titulos){
        for(let a of i.categoria){
          if(a === "Série"){
            this.titulosSerie.push(i);
          } else if(a === "Filme"){
            this.titulosFilme.push(i);
          } else if(a === "Original"){
            this.titulosOriginais.push(i);
          }
        }
      }
    });
  }



}
