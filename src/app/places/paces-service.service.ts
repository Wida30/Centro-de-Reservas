import { HttpClient } from '@angular/common/http';

import { PacesInterface } from 'src/app/places/paces-interface';
import { Pipe, PipeTransform } from '@angular/core';

import { Injectable } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service';
import { map, switchMap, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PacesServiceService {
  _places: PacesInterface[] = [];



  constructor(private authService: AuthserviceService, private httpClient : HttpClient) {
    this._places = [
      {
        id: 'p1',
        title: 'Casa en Madrid',
        summary: ' Piso de un dormitorio en Malasaña, a 3 minutos andando de la Gran Vía',
        description:
          ' ubicado en la primera planta (interior) de una finca de 1920. La vivienda tiene una localización inmejorable, en pleno centro de Malasaña, al lado de la famosa calle Fuencarral y a tan solo unos minutos de Gran Vía, donde puedes encontrar tiendas con las mejores marcas nacionales e internacionales. El barrio ofrece gran cantidad de actividades de ocio, cultura y esparcimiento, además de tener supermercados y tiendas locales cercanas  ',
        imagen:
          'https://images.habimg.com/imgh/3780-4405400/piso-de-un-dormitorio-en-malasana-a-3-minutos-andando-de-la-gra-madrid_3780-img4405400-277574938G.jpg',
        price: 158,
        availableFrom: new Date('2023-01-01'),
        availableTo: new Date('2025-12-31'),
        userId: 'uno',
      },
      {
        id: 'p2',
        title: 'Piso en Bilbao',
        summary: '2 habitaciones, centro de Bilbao',
        description:
          ' La luz inunda la casa durante todo el día, al ser novena y última planta, dado que está además orientada al sur, este (cocina) y norte (una habitación), todas con vistas. Dispone de hall de entrada, salón con salida a balcón, y una amplia cocina cuadrada con gran ventanal al este con magníficas vistas sobre Bilbao',
        imagen:
          'https://www.inmobiliariasomera.com/wp-content/uploads/2022/02/N2B0486-850x570.jpg',
        price: 188,
        availableFrom: new Date('2023-01-01'),
        availableTo: new Date('2025-12-31'),
        userId: 'dos',
      },
      {
        id: 'p3',
        title: 'Loft en Barcelona',
        summary: '1 habitación, Plaza Glorias.',
        description:
          'Este piso ático de la calle Bretón de los Herreros está en una finca agradable y en buen estado con ascensor y rampa por la entrada. Tiene la ventaja de estar orientado hacía el interior, al Tibidabo. Goza de máxima tranquilidad y intimidad, también de sol de tarde pero de una luminosidad constante y de una buena ventilación.',
        imagen:
          'https://www.aparteasy.com/es/alquiler-larga-estancia/fotos/2/1506071694e29eb1f0aa6fa2430fa6a5ef93099cfb/1506071695fac81b1fe6696405fe89103e947c0242.jpg',
        price: 140,
        availableFrom: new Date('2023-01-01'),
        availableTo: new Date('2025-12-31'),
        userId: 'tres',
      },
    ];
  }
  // fetchPlaces(){
  //   return this.httpClient.get('https://airbnb-250f2-default-rtdb.europe-west1.firebasedatabase.app/offered-places.json')
  //   .pipe(
  //     map( resData =>{

  //     }


  //     )
  //   )
  // }

  getPlaces() {
    return [...this._places];

  }

  getplace(id: string) {
    return { ...this._places.find((p) => p.id === id) };
  }

  addPlace(
    title: string,
    summary: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {

    let generatedId:string
    const newPlace: PacesInterface = {
      id: Math.random().toString(),
      title: title,
      summary: summary,
      imagen:

        '  https://images.homify.com/c_fill,f_auto,q_0,w_740/v1473331987/p/photo/image/1644786/woodbau_07.07.16_025.jpg',
      price: price,
      availableFrom: dateFrom,
      availableTo: dateTo,
      userId: this.authService.userID,
    };

    // return this.httpClient.post<{name:string}>(
    //   'https://airbnb-250f2-default-rtdb.europe-west1.firebasedatabase.app/offered-places.json',
    //   {...newPlace, id:null}
    //   ).pipe(
    //     switchMap(resData => {
    //       generatedId = resData.name

    //       return this._places
    //     }),
    //     // take(1),
    //     // tap(places => {
    //       //newPlace.id = generatedId;
    //     //   this._places.next(places.concat(newPlace))
    //     // })


    //   );


      this._places.push(newPlace);

  }

  updateOffer(placeId: string, title: string, description: string){


  }
}
