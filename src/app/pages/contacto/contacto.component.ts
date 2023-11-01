import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  id: string = "0103";
  name: string = "Diego";

  persona: Persona = new Persona();


  //Metodo para que se llame a otra pagina
  constructor(private router: Router, private contactoService: ContactosService){ //Aqui una diferencia es que si se declara edentro del constructor, es una variable global mas no una interna como en java

  }
  goAcercaDe(){
    console.log("LLamado de emergencia", this.id, this.name);
    this.router.navigate(['pages/acercade']);
  }

  savePersona(){
    this.contactoService.addPersona(this.persona);
    this.persona = new Persona();
    console.log('contactos', this.contactoService.getContactos());
  }
}
