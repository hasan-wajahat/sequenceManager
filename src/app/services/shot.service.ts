import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Short} from '../object-classes/service-classes';


@Injectable()
export class ShortService {

  constructor(private http: Http) {
  }

  getShort(seq: string): Observable<Short[]> {
    var url = 'http://localhost:3000/sequences/' + seq + '/shorts';
    return this.http.get(url).map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json().data.map(mapJson);
  }
}

function  mapJson(jsonData: any) {
  let returnShort = <Short>({
    id: jsonData.id,
    shotID: jsonData.attributes['shot-id'],
    shotName: jsonData.attributes['shot-name'],
    seqID: jsonData.relationships.sequence.data.id
  });
  return returnShort;
}

//TODO: we have to adjust it according to sequence_id
