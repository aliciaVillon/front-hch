import { Component, OnInit } from '@angular/core';
import { resolve } from 'chart.js/dist/helpers/helpers.options';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuario().then(usuarios =>{
      console.log(usuarios);
    });

    /* const promesa = new Promise((resolve, reject) =>{
       if(false){
         resolve('Hola mundo');
       }else{
         reject('algo salió mal');
       }
      
     });
     promesa.then((mensaje)=>{
       console.log(mensaje);
     }).catch( error =>  console.log("Error en mi promesa ", error));
     console.log("fin");*/
  }

  getUsuario() {
    const promesa = new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json()
          // {  resp.json().then( body => console.log(body))  }
        )
        .then(body => resolve(body.data));
    });

    return promesa;
  }
}
