import { Component, OnInit } from '@angular/core';
import { lastColection, Lienas, Products } from './model/colecciones.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  lineas: Lienas[] = [
    {
      title : 'Linea Femenina',
      image : 'https://tejidostotas.com/wp-content/uploads/2023/02/image-tejidos-totas-mujer-plata-marron-1.jpg'
    },
    {
      title : 'Linea Masculina',
      image : 'https://tejidostotas.com/wp-content/uploads/2023/02/image-tejidos-totas-hombre-grecia-azul-oscuro.jpg'
    },
    {
      title : 'Accesorios',
      image : 'https://http2.mlstatic.com/D_NQ_NP_862573-MCO41372923009_042020-O.jpg'
    }
  ]

  ultimaColeccion : lastColection[] = [
    {
      name : '',
      description : 'descripcion prenda',
      image : './assets/img/AlejandraAngelUltimaColeccion/DSC00329.jpg',
    },
    {
      name : '',
      description : 'descripcion prenda',
      image : './assets/img/AlejandraAngelUltimaColeccion/DSC00341.jpg',
    },
    {
      name : '',
      description : 'descripcion prenda',
      image : './assets/img/AlejandraAngelUltimaColeccion/DSC00344.jpg',
    },
    {
      name : '',
      description : 'descripcion prenda',
      image : './assets/img/AlejandraAngelUltimaColeccion/DSC00350.jpg',
    },
    {
      name : '',
      description : 'descripcion prenda',
      image : './assets/img/AlejandraAngelUltimaColeccion/DSC00361.jpg',
    },
    {
      name : '',
      description : 'descripcion prenda',
      image : './assets/img/AlejandraAngelUltimaColeccion/DSC00362.jpg',
    },
    {
      name : '',
      description : 'descripcion prenda',
      image : './assets/img/AlejandraAngelUltimaColeccion/DSC00377.jpg',
    },
    {
      name : '',
      description : 'descripcion prenda',
      image : './assets/img/AlejandraAngelUltimaColeccion/DSC00378.jpg',
    },
    /* {
      name : 'oro',
      description : '',
      image : '',
    }, */
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
