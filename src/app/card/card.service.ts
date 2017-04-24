import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import{ Card } from './card';

@Injectable()
export class CardService {
 constructor(private http: Http) {}

  getCards(): Promise < Card[] > {
    return this.http.get('src/assets/json/cards.json')
      .toPromise().then(response => response.json() as Card[])
      .catch(this.handleError);
  }
    private handleError(error: any): Promise < any > {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
