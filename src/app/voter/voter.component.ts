import { Component, OnInit ,Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  @Input()name: string
  @Output() onVoted = new EventEmitter<boolean>();
  private voted: boolean = false;

    constructor() { }

  ngOnInit() {
  }
  vote(agree: boolean) {
    this.onVoted.emit(agree);
    this.voted = true;
  }
}
