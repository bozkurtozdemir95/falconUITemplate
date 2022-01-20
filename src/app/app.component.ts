import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'falconUITemplate';

  buttonToggleContent = [
    {id: 1, text: 'SLOW'},
    {id: 2, text: 'FAST'},
  ];

  selectedButtonToggle(e: any){
    console.log(e);
  }
}
