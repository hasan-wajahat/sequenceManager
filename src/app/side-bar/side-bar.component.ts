import {Component, OnInit} from '@angular/core';
import {SeqService} from '../sequence.service';
import {ShortService} from '../shot.service';

class Sequence {
  constructor(public seq: number,
              public id: string,
              public name: string) {
  }
}
class nestedShort {
  constructor(public seq: number,
              public shotID: string,
              public shotName: string) {
  }
}
class Short {
  constructor(public sequenceSequence: number,
              public shorts: nestedShort) {
  }
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['side-bar.component.scss'],
  providers: [SeqService, ShortService]
})

export class SideBarComponent implements OnInit {
  sequence: Sequence[];
  short: Short[];

  constructor(private seqService: SeqService, private shortService: ShortService) {
  }

  ngOnInit() {
    this.getSequence();
    this.getShort();
  }

  getSequence() {
    this.seqService.getSeq().subscribe(
      sequence => this.sequence = sequence
    );
  }

  getShort() {
    this.shortService.getShort().subscribe(
      short => this.short = short
    );
  }

}
