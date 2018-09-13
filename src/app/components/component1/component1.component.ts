import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  @Input() count;
  @Output() changed = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onClickCountLocal() {
      this.count = this.count + 1 ;
  }
  onClickCountGlobal() {
    this.count = this.count +1 ;
    this.changed.emit(this.count);
  }
}
