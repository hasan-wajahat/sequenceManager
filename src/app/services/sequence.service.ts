import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
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
    return this.http.get(this.url).map(this.extractData);
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
