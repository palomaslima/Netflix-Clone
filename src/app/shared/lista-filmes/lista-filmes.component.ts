import { Component, OnInit, Input } from '@angular/core';
import { TitulosService } from 'src/app/services/titulos.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss']
})
export class ListaFilmesComponent implements OnInit {

  @Input() title: string;
  @Input() list = [];

  dadosDosTitulos;
  constructor() { }

  ngOnInit(): void {
  }


}
