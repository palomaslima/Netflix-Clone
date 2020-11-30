import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PaginaDetalheComponent } from './shared/pagina-detalhe/pagina-detalhe.component';
import { TitulosComponent } from './shared/titulos/titulos.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'titulos', component: TitulosComponent},
  {path: 'pagina-titulos', component: PaginaDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
