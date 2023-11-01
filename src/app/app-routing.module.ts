import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ListaContactosComponent } from './pages/lista-contactos/lista-contactos.component';

//Aqui en las rutas se define la url y el componente que necesito, tal cual como vue
const routes: Routes = [
  {path:"pages/acercade",component:AcercadeComponent},
  {path:"pages/contacto",component:ContactoComponent},
  {path:"pages/lista-contacto",component:ListaContactosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
