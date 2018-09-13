import { Component, OnInit ,EventEmitter , Input , Output , Directive } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';
import { Hero } from '../hero';
@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {
  title = 'xxx';
  months = ["Jan" , "Feb" , "Mar" , "April" , "May"];
  isVarilable = true;
  isActive = false;
  num = 1;
  myMsg = "";
  currentHero = new Hero(100 ,'pppp');
  agree = 0;
  disagree = 0;
  voters = ['Me','You','Him']
  heroes = [
    new Hero(1 ,'pppp') ,
    new Hero(2 ,'few') ,
    new Hero(3 , 'papon') ,
    new Hero(4 , 'xx')
  ];
  currentClasses: {}
  setCurrentClasses() {
    this.currentClasses = {
    };
  }
  onClickReset() {
    this.myMsg = "";
  }
  myClickFunction(event) {
    this.isVarilable = false;
  }
  changeMonths(event) {
    confirm("Change Month");
  }
  onKeyUpVerify(message) {
    if(message == "test"){
      alert("TRUE");
    }
  }
  onVoted(agree:boolean){
    agree ? this.agree++ : this.disagree++ ;
  }
  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.num--; this.resize(-1); }
  inc() { this.num++; this.resize(+1); }

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
