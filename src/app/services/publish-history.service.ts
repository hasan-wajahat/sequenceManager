import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {PublishHistoryList} from '../object-classes/service-classes';

@Injectable()
export class PublishHistoryService {

  // private url = '../assets/publishList.json';
  // private url = '../angularAPI/PublishHistory.php';

  constructor(private http: Http) {
  }

  getPubList(shortSeq: string): Observable<PublishHistoryList[]> {
    var url = 'http://localhost:3000/shorts/' + shortSeq + '/publish_histories';
    return this.http.get(url).map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json().data.map(mapJson);
  }
}

function  mapJson(jsonData: any) {
  let returnPublishHistory = <PublishHistoryList>({
    id: jsonData.id,
    taskType: jsonData.attributes.tasktype,
    publisher: jsonData.attributes.publisher,
    image: jsonData.attributes.image,
    comment: jsonData.attributes.comment,
  });
  return returnPublishHistory;
}
