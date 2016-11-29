import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Sequence} from '../object-classes/service-classes';


@Injectable()
export class SeqService {
  private url = '../assets/sequenceList.json';
  // private url = 'whyu0001.php';

  constructor(private http: Http) {
  }

  getSeq(): Observable<Sequence[]> {
    let params = new URLSearchParams();
    params.set('Mode', 'GetSequenceListByProjID');
    params.set('ProjID', 'RNT');
    return this.http.get(this.url, {search: params}).map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
}
