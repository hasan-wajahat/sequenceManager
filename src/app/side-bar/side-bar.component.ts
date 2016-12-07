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
    this.short = [];
    for (let singleSeq of this.sequence) {
      var str = singleSeq.id.toString();
      this.shortService.getShort(str).subscribe(
        short => {this.short = this.short.concat(short);}
      );
      this.sequenceDisplay[singleSeq.id] = true;
    }
  }

  toggleDisplay(seq: number) {
    this.sequenceDisplay[seq] = !this.sequenceDisplay[seq];
  }

  goToShortDetail(short: string) {
    let link = ['/short', short];
    this.router.navigate(link);
  }


}
