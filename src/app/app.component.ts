import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Forms';
  @ViewChild('greetvcr',{read:ViewContainerRef}) private vcr? : ViewContainerRef;
  constructor(){

  }
  async loadGreet(){
     const {GreetComponent} = await import('./greet/greet.component'); 
     if(this.vcr != undefined){
      let gc =  this.vcr.createComponent(GreetComponent);
      gc.instance.message = " Hyderaband";
      gc.instance.greetEvent.subscribe(
       (data:any)=>{
         alert(data);
       }
      )
     }
     
  }
}
