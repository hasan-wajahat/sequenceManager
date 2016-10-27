import {Component, OnInit} from '@angular/core';
import {SeqService} from '../sequence.service';

class Sequence {
  constructor(public seq: number,
              public id: string,
              public name: string) {
  }
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['side-bar.component.scss'],
  providers: [SeqService]
})

export class SideBarComponent implements OnInit {
  sequence: Sequence[];

  constructor(private seqService: SeqService) {
  }

  ngOnInit() {
    this.getSequence();
  }

  getSequence() {
    this.seqService.getSeq().subscribe(
      sequence => this.sequence = sequence
    );
  }

}
