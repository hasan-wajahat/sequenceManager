import { Component, OnInit, ViewChild } from '@angular/core';
import {PublishItem} from '../../object-classes/publish-item';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {

  shotID: number;
  publishItem;
  @ViewChild("imgInput") imgInput;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.shotID = +params['short'];
        this.publishItem = new PublishItem(1,this.shotID,'first','','this is the first item');
      });
  }

  onSubmit(){
    let file = this.imgInput.nativeElement.files;
    if(file && file[0]) {
      this.publishItem.fileName = this.imgInput.nativeElement.files[0].name;
    }
    console.log(this.publishItem);
  }

}
