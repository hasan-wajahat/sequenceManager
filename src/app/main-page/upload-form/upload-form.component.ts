import {Component, OnInit, ViewChild} from '@angular/core';
import {PublishItem} from '../../object-classes/publish-item';
import {ActivatedRoute, Router} from '@angular/router';
import {PublishHistoryService} from '../../services/publish-history.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css'],
  providers: [PublishHistoryService]
})
export class UploadFormComponent implements OnInit {

  shotID: number;
  publishItem;
  @ViewChild("imgInput") imgInput;

  constructor(private route: ActivatedRoute, private router: Router, private publishHistoryService: PublishHistoryService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.shotID = +params['short'];
        this.publishItem = new PublishItem(null, null, this.shotID, null, null, null);
      });
  }

  onSubmit() {
    let file = this.imgInput.nativeElement.files;
    if (file && file[0]) {
      this.publishItem.fileName = this.imgInput.nativeElement.files[0].name;
    }
    this.publishHistoryService.postPublishItem(this.publishItem)
      .subscribe(
        response=> {
          if (response.json()[0].status == 'created') {
            this.router.navigate(['/short', this.shotID]);
          }
        }
      );
  }

}
