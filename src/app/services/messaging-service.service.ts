import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject(null);

  constructor() {
  
  }
/*
  pedirPermiso() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log('Permiso concedido. Token: ', token);
      },
      (error) => {
        console.error('Error al solicitar permiso: ', error);
      }
    );
  }

  enviarNotificacion(titulo: string, cuerpo: string, token: string) {
    const payload = {
      notification: {
        title: titulo,
        body: cuerpo
      },
      to: token
    }
    return this.angularFireMessaging.requestPermission
      .then(() => {
        return this.angularFireMessaging.messaging.send(payload)
      })
  }*/
}
