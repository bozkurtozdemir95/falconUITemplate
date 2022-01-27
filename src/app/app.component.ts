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
  langDropdown = [
    {id:1, img: '../../../assets/flags/tr.png', title: 'TURKCE'},
    {id:2, img: '../../../assets/flags/en.png', title: 'ENGLISH'},
    {id:3, img: '../../../assets/flags/de.png', title: 'DEUTSCH'},
    {id:4, img: '../../../assets/flags/it.png', title: 'ITALIANO'},
  ]
  activeItem : any = this.langDropdown[0];

  selectedButtonToggle(e: any) {
    console.log(e);
  }

  toggleSidebar(e: any) {
    console.log(e);
    this.isSidebarOpen = e;
  }

  changeLang(item: any){
    this.activeItem = item;
  }
}
