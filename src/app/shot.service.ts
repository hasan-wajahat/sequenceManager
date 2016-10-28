import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

class Short {
  constructor(public id: string,
              public name: string) {
  }
}

@Injectable()
export class ShortService {
  private url = '../assets/shotList.json';

  constructor(private http: Http) {
  }

  getShort(): Observable<Short[]> {
    let params = new URLSearchParams();
    params.set('ProjID', 'RNT');
    return this.http.get(this.url, {search: params}).map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data;
  }
}
