import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router, NavigationEnd} from '@angular/router';
import {PublishHistoryService} from '../publish-history.service';

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
  pubHistoryList: PublishHistoryList[];

  constructor(private route: ActivatedRoute, private pubHistoryService: PublishHistoryService, private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.route.params.forEach((params: Params) => {
          this.id = params['seq'];
        });
        this.getPubHistoryList(this.id);
      }
    })
  }

  ngOnInit() {
  }

  getPubHistoryList(shortSeq) {
    this.pubHistoryService.getPubList(shortSeq).subscribe(
      list => this.pubHistoryList = list
    )
  }
}
