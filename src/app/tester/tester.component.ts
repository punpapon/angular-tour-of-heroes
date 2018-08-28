import { Component, OnInit ,EventEmitter , Input , Output , Directive } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {
  title = 'xxx';
  months = ["Jan" , "Feb" , "Mar" , "April" , "May"];
  isVarilable = true;

  myClickFunction(event) {
    this.isVarilable = false;
  }
  changeMonths(event) {
    confirm("Change Month");
  }
  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  toDayDate;

  constructor(private myService: InMemoryDataService) { }

  ngOnInit() {
    this.toDayDate = this.myService.showTodayDate();
  }

}
