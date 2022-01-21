import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'falconUITemplate';
  isSidebarOpen = false;
  buttonToggleContent = [
    {id: 1, text: 'SLOW'},
    {id: 2, text: 'FAST'},
  ];

  selectedButtonToggle(e: any){
    console.log(e);
  }

  toggleSidebar(e: any){
    console.log(e);
    this.isSidebarOpen = e;
  }
}
