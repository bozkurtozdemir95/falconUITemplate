import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'falcon-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  isCollapsed: boolean = true;
  @Input() activeItem: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
