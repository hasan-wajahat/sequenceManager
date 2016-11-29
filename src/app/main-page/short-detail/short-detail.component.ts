import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PublishHistoryService} from '../../services/publish-history.service';
import {Observable} from "rxjs";
import 'rxjs/add/operator/switchMap';
import {PublishHistoryList} from '../../object-classes/service-classes'


@Component({
  selector: 'app-short-detail',
  templateUrl: 'short-detail.component.html',
  styleUrls: ['short-detail.component.scss'],
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
      return this.pubHistoryService.getPubList(this.id);
    });
  }
}
