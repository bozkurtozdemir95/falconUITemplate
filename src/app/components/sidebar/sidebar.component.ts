import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'falcon-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() isSidebarOpen = true;
  @Output() toggleSidebar = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(){
    this.isSidebarOpen = !this.isSidebarOpen;
    this.toggleSidebar.emit(this.isSidebarOpen);
  }
}
