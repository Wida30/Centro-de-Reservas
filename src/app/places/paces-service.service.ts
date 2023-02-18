import { PacesInterface } from './paces-interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacesServiceService {

  private _places:PacesInterface [] = []

  // private places: PacesInterface[] = [

  //   new PacesInterface (
  //     'p1',
  //     'casa en Madrid',
  //     'casa de tres dormitorios en el centro de la ciudad',
  //     'https://images.habimg.com/imgh/3780-4405400/piso-de-un-dormitorio-en-malasana-a-3-minutos-andando-de-la-gra-madrid_3780-img4405400-277574938G.jpg',
  //     155
  //   ),
  //   new PacesInterface (
  //     'p2',
  //     'casa en barceona',
  //     'casa de tres dormitorios en el centro de la ciudad',
  //     'https://emtstatic.com/2019/04/iStock-977198374.jpg',
  //     184
  //   ),

  // ];





  constructor() {

    this._places = [
      {
        id: 'p1',
        title: 'Casa en Madrid',
        description: 'casa 3 dormitorios',
        imagen: 'https://images.habimg.com/imgh/3780-4405400/piso-de-un-dormitorio-en-malasana-a-3-minutos-andando-de-la-gra-madrid_3780-img4405400-277574938G.jpg',
        price: 158,

      },
      {
        id: 'p2',
        title: 'Piso en Bilbao',
        description: 'piso exterior de dos dormitorios y bonitas vistas',
        imagen: 'https://www.inmobiliariasomera.com/wp-content/uploads/2022/02/N2B0486-850x570.jpg',
        price: 188,

      },
      {
        id: 'p3',
        title: 'loft en Barcelona',
        description: 'Alojamiento de 65 m² acogedor y moderno.',
        imagen: 'https://www.aparteasy.com/es/alquiler-larga-estancia/fotos/2/1506071694e29eb1f0aa6fa2430fa6a5ef93099cfb/1506071695fac81b1fe6696405fe89103e947c0242.jpg',
        price: 140,

      }
    ]
  }

  getPlaces() {
    return [...this._places];
  }

  getplace(id:string){
    return {...this._places.find( p =>p.id === id)}
  }
}
