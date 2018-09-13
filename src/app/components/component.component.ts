import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html'
})
export class ComponentComponent {

  count: number = 0;

  onClickCount() {
    this.count = this.count + 1 ;
  }
  
  onChangedCount1(countValue) {
    this.count = countValue;
  }
}
