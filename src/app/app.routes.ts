import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'library/:id', loadComponent:()=>import('./components/library/library.component').then(m=>m.LibraryComponent)},
  {path: '', loadComponent:()=>import('./components/search/search.component').then(m=>m.SearchComponent)  },
];
