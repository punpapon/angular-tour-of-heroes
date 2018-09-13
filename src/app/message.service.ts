import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
  constructor( private httpClient: HttpClient) {}

  getTodolist(){
    console.log("XXXX");
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos");
  }
}
