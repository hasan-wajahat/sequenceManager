import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {PublishHistoryList} from '../object-classes/service-classes';

@Injectable()
export class PublishHistoryService {

  private url = '../assets/publishList.json';
  // private url = '../angularAPI/PublishHistory.php';

  constructor(private http: Http) {
  }

  getPubList(shortSeq: string): Observable<PublishHistoryList[]> {
    let params = new URLSearchParams();
    params.set('shortSeq', shortSeq);
    return this.http.get(this.url, {search: params}).map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    let empty = [{verNo: "empty", tskType: "empty", publisher: "empty",pbDate: "empty", pbCmt: "empty"}];
    if (body.data == 'Unexpected query result') {
      return empty;
    } else {
      return body.data;
    }
  }
}
