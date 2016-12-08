import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {PublishHistoryList} from '../object-classes/service-classes';
import {PublishItem} from '../object-classes/publish-item';

@Injectable()
export class PublishHistoryService {

  // private url = '../assets/publishList.json';
  // private url = '../angularAPI/PublishHistory.php';
  private server = 'http://localhost:3000/shorts/';

  constructor(private http: Http) {
  }

  getPubList(shortSeq: string): Observable<PublishHistoryList[]> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    var url = this.server + shortSeq + '/publish_histories';
    return this.http.get(url,{headers: headers}).map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json().data.map(mapJson);
  }

  postPublishItem(publishItem: PublishItem, id: number) {
    var url = this.server + id.toString() + '/publish_histories';
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return this.http.post(url, JSON.stringify(publishItem), {headers: headers});
  }

  deletePublishItem(shortID: string, id: number) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    var url = this.server + shortID + '/publish_histories/' + id.toString();
    return this.http.delete(url, {headers: headers});
  }

}

function mapJson(jsonData: any) {
  let returnPublishHistory = <PublishHistoryList>({
    id: jsonData.id,
    taskType: jsonData.attributes.tasktype,
    publisher: jsonData.attributes.publisher,
    image: jsonData.attributes.image,
    comment: jsonData.attributes.comment,
  });
  return returnPublishHistory;
}
