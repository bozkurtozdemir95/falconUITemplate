import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'falcon-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {
  activeButton: any;
  @Input() content: any;
  @Output() valueChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectButton(id: number) {
    this.activeButton = id;
    this.valueChange.emit(id);
  }
}
