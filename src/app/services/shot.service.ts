import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Short} from '../object-classes/service-classes';


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
