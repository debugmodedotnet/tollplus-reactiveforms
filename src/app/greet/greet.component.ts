import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  @Input() message = "";
  name = "";
  @Output() greetEvent =  new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  greet(){
    this.greetEvent.emit("hello" + this.name);
  }

}

@NgModule({
  declarations:[GreetComponent],
  imports:[FormsModule]
})
export class Greetmodule {

}
