import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Sequence} from '../object-classes/service-classes';


@Injectable()
export class SeqService {
  // private url = '../assets/sequenceList.json';
  // private url = 'whyu0001.php';
  private url = 'http://localhost:3000/sequences';

  constructor(private http: Http) {
  }

  getSeq(): Observable<Sequence[]> {
    let params = new URLSearchParams();
    params.set('Mode', 'GetSequenceListByProjID');
    params.set('ProjID', 'RNT');
    return this.http.get(this.url, {search: params}).map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json().data.map(mapJson);
  }
}

function  mapJson(jsonData: any){
  let returnSequence = <Sequence>({
    id: jsonData.id,
    seqID: jsonData.attributes.seqID,
    name: jsonData.attributes.name
  });
  return returnSequence;
}
