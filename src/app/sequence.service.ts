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

@Injectable()
export class SeqService {
  private url = '../assets/sequenceList.json';

  constructor(private http: Http) {
  }

  getSeq(): Observable<Sequence[]> {
    let params = new URLSearchParams();
    params.set('Mode', 'GetSequenceListByProjIDIncludingALL');
    params.set('ProjID', 'RNT');
    return this.http.get(this.url, {search: params}).map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
}
