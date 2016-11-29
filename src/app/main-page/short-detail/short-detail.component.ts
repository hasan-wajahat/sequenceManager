import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
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

  constructor(private route: ActivatedRoute, private router: Router, private pubHistoryService: PublishHistoryService) {
  }

  ngOnInit() {
    this.pubHistoryList = this.route.params.switchMap((params: Params) =>{
      this.id = params['short'];
      return this.pubHistoryService.getPubList(this.id);
    });
  }

  goToUploadForm(){
    let link = ['/new-item', this.id];
    this.router.navigate(link);
  }
}
