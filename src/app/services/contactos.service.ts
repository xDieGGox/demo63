import { Injectable } from '@angular/core'; //Este seria como el controlador
import { Persona } from '../domain/persona';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  contactos: Persona[] = []; //Declaracion de un array, en este caso de objetos de persona

  constructor() { }

  addPersona(persona: Persona){
    this.contactos.push(persona);
  }

  getContactos(){
    return this.contactos;
  }
}
