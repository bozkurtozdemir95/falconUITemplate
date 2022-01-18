import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'falconUITemplate';

  buttonToggleContent = [
    {id: 1, text: 'Button 1'},
    {id: 2, text: 'Button 2'},
    {id: 3, text: 'Button 3'},
  ];

  selectedButtonToggle(e: any){
    console.log(e);
  }
}
