import {Component, OnInit} from '@angular/core';
import {SeqService} from '../services/sequence.service';
import {ShortService} from '../services/shot.service';
import {Router} from '@angular/router';
import {Sequence} from '../object-classes/service-classes';
import {Short} from '../object-classes/service-classes'


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

  constructor(private router: Router, private seqService: SeqService, private shortService: ShortService) {
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
      str += singleSeq.id.toString() + ",";
      this.sequenceDisplay[singleSeq.id] = true;
    }
    str = str.slice(0, -1);
    this.shortService.getShort(str).subscribe(
      short => this.short = short
    );
  }

  toggleDisplay(seq: number) {
    this.sequenceDisplay[seq] = !this.sequenceDisplay[seq];
  }

  goToShortDetail(short: string) {
    let link = ['/short', short];
    this.router.navigate(link);
  }

}
