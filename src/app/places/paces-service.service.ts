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
        description: ' Piso de un dormitorio en Malasaña, a 3 minutos andando de la Gran Vía, ubicado en la primera planta (interior) de una finca de 1920. La vivienda tiene una localización inmejorable, en pleno centro de Malasaña, al lado de la famosa calle Fuencarral y a tan solo unos minutos de Gran Vía, donde puedes encontrar tiendas con las mejores marcas nacionales e internacionales. El barrio ofrece gran cantidad de actividades de ocio, cultura y esparcimiento, además de tener supermercados y tiendas locales cercanas  ',
        imagen: 'https://images.habimg.com/imgh/3780-4405400/piso-de-un-dormitorio-en-malasana-a-3-minutos-andando-de-la-gra-madrid_3780-img4405400-277574938G.jpg',
        price: 158,

      },
      {
        id: 'p2',
        title: 'Piso en Bilbao',
        description: ' La luz inunda la casa durante todo el día, al ser novena y última planta, dado que está además orientada al sur (salón y 2 habitaciones), este (cocina) y norte (una habitación), todas con vistas. Dispone de hall de entrada, salón con salida a balcón, y una amplia cocina cuadrada con gran ventanal al este con magníficas vistas sobre Bilbao',
        imagen: 'https://www.inmobiliariasomera.com/wp-content/uploads/2022/02/N2B0486-850x570.jpg',
        price: 188,

      },
      {
        id: 'p3',
        title: 'Loft en Barcelona',
        description: 'Este piso ático de la calle Bretón de los Herreros está en una finca agradable y en buen estado con ascensor y rampa por la entrada. Tiene la ventaja de estar orientado hacía el interior, al Tibidabo. Goza de máxima tranquilidad y intimidad, también de sol de tarde pero de una luminosidad constante y de una buena ventilación.',
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
