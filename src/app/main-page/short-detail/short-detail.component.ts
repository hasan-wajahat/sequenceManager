import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PublishHistoryService} from '../../services/publish-history.service';
import 'rxjs/add/operator/switchMap';
import {PublishHistoryList} from '../../object-classes/service-classes'

import {AuthService} from'../../services/authentication.service'

@Component({
  selector: 'app-short-detail',
  templateUrl: 'short-detail.component.html',
  styleUrls: ['short-detail.component.scss'],
  providers: [PublishHistoryService, AuthService]
})
export class ShortDetailComponent implements OnInit {

  id: string;
  pubHistoryList: PublishHistoryList[];

  constructor(private route: ActivatedRoute, private router: Router, private pubHistoryService: PublishHistoryService,
              private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['short'];
      this.pubHistoryService.getPubList(this.id).subscribe(item=> {
        this.pubHistoryList = item
      });
    });
  }

  goToUploadForm() {
    // let link = ['/new-item', this.id];
    // this.router.navigate(link);
    this.authService.login('a@a.com','changeme').subscribe(
      result => {
        console.log(result);
      }
    )
  }


  onDelete(pubItem: PublishHistoryList) {
    this.pubHistoryList.splice(this.pubHistoryList.indexOf(pubItem), 1);
    this.pubHistoryService.deletePublishItem(this.id, pubItem.id).subscribe(
      res => console.log(res)
    );

  }
}
