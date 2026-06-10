import { Routes } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { DiretoresComponent } from './diretores/diretores.component';
import { GenerosComponent } from './generos/generos.component';
import { FilmeEditarComponent } from './filmes/filme-editar/filme-editar.component';
import { FilmeDetalhesComponent } from './filmes/filme-detalhes/filme-detalhes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/filmes', pathMatch: 'full' },

  { path: 'filmes', component: FilmesComponent },
  { path: 'filmes/editar/:id', component: FilmeEditarComponent },
  { path: 'filmes/:id', component: FilmeDetalhesComponent },

  { path: 'diretores', component: DiretoresComponent },

  { path: 'generos', component: GenerosComponent }
];