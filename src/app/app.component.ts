import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'sDirectApp';

  change(){
    console.log(this.title);
  }
}