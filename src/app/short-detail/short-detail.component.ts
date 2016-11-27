import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PublishHistoryService} from '../publish-history.service';
import {Observable} from "rxjs";
import 'rxjs/add/operator/switchMap';

class PublishHistoryList {
  constructor(public verNo: string,
              public taskType: number,
              public publisher: string,
              public pbDate: string,
              public pbCmt: string) {
  }
}




@Component({
  selector: 'app-short-detail',
  templateUrl: './short-detail.component.html',
  styleUrls: ['./short-detail.component.css'],
  providers: [PublishHistoryService]
})
export class ShortDetailComponent implements OnInit {

  id: string;
  pubHistoryList: Observable<PublishHistoryList[]>;

  constructor(private route: ActivatedRoute, private pubHistoryService: PublishHistoryService) {
  }

  ngOnInit() {
    this.pubHistoryList = this.route.params.switchMap((params: Params) =>{
      this.id = params['seq'];
      console.log('hello');
      return this.pubHistoryService.getPubList(this.id);
    });
  }
}
