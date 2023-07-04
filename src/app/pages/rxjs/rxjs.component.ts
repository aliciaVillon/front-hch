import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy{

public intervaloSubs: Subscription;

  constructor() {
   this.intervaloSubs = this.retornaIntervalo()
    .subscribe( console.log );

    /*this.retornaObservable().pipe(
      retry(2)
    )
      .subscribe(
        valor => console.log('Subs:', valor),
        err => console.warn('Error:', err),
        () => console.log('Obs terminado')

      );*/
  }
  ngOnDestroy(): void {
    this.intervaloSubs.unsubscribe();
   // throw new Error('Method not implemented.');
  }

  retornaIntervalo():Observable<number> {
    return interval(500)
      .pipe(
        take(10),
        map(valor => valor + 1),
        filter( valor => (valor %  2 == 0) ? true: false),
        
         
      ); 
  }

  retornaObservable(): Observable<number> {
    let i = -1;

    const obs$ = new Observable<number>(observer => {

      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i == 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i == 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1000)
    });

    return obs$;
  }
}
