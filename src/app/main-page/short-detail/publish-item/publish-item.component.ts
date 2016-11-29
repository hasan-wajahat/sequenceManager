import { Component, OnInit, Input } from '@angular/core';
import {PublishHistoryList} from '../../../object-classes/service-classes';

@Component({
  selector: 'app-publish-item',
  templateUrl: './publish-item.component.html',
  styleUrls: ['publish-item.component.scss']
})
export class PublishItemComponent implements OnInit {

  @Input() publishItem: PublishHistoryList;

  constructor() { }

  ngOnInit() {
  }

}
