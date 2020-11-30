import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ListaFilmesComponent } from './shared/lista-filmes/lista-filmes.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TitulosComponent } from './shared/titulos/titulos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { PaginaDetalheComponent } from './shared/pagina-detalhe/pagina-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaFilmesComponent,
    FooterComponent,
    TitulosComponent,
    BannerComponent,
    PaginaDetalheComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
