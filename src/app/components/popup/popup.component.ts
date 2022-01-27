import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'falcon-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() showPopup = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  closePopup() {
    this.showPopup = false;
  }

}
