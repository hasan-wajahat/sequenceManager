import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

class Sequence {
  constructor(public seq: number,
              public id: string,
              public name: string) {
  }
}

class nestedShort {
  constructor(public seq: number,
              public shotID: string,
              public shotName: string) {
  }
}
class Short {
  constructor(public sequenceSequence: number,
              public shorts: nestedShort) {
  }
}

@Injectable()
export class ShortService {
  private url = '../assets/shotList.json';
  // private url = '../angularAPI/ShotList.php';

  constructor(private http: Http) {
  }

  getShort(seq: string): Observable<Short[]> {
    let params = new URLSearchParams();
    params.set('ProjID', 'RNT');
    params.set('Seq', seq);
    return this.http.get(this.url, {search: params}).map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data;
  }
}
