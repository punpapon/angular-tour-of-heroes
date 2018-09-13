import { Component , OnInit} from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent implements OnInit{
  private todolist : any;
  constructor(private messageService : MessageService) {}
  ngOnInit() {
  this.messageService.getTodolist().subscribe((respones) => {
    this.todolist = respones;
    console.log('todolist :',this.todolist);
    console.log('respones :', respones);
  });
  }
}

interface todo {
  userId: number;
  id: number;
  tittle: string;   
  completed: boolean;
}
