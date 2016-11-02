import {Component, OnInit, sequence} from '@angular/core';
import {SeqService} from '../sequence.service';
import {ShortService} from '../shot.service';
import {Hash} from "crypto";

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
  sequenceDisplay: Object;

  constructor(private seqService: SeqService, private shortService: ShortService) {
  }

  ngOnInit() {
    this.getSequence();
  }

  getSequence() {
    this.seqService.getSeq().subscribe(
      sequence => this.getShort(sequence)
    );
  }

  getShort(seq: Sequence[]) {
    this.sequence = seq;
    this.sequenceDisplay = [];
    var str = "";
    for (let singleSeq of this.sequence) {
      str += singleSeq.seq.toString() + ",";
      this.sequenceDisplay[singleSeq.seq] = true;
    }
    str = str.slice(0, -1);
    this.shortService.getShort(str).subscribe(
      short => this.short = short
    );
  }

  test(seq: number) {
    this.sequenceDisplay[seq] = !this.sequenceDisplay[seq];
  }

}
