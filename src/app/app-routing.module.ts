import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

/* 
* se importa el el componente principal
* se crea una ruta para que el priyecto inicie por esta

*/
const routes: Routes = [
  {
    path: 'inicio',
    component: LayoutComponent
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
