import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  currentVal="";
  article:string='Jo jita wahi sikhandar'
  getval(nam)
  {
    console.warn(nam)
    this.currentVal=nam
  }
}
