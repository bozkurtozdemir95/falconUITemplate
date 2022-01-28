import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'falcon-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {
  @Output() valueChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  isChecked(e: any) {
    this.valueChange.emit(e.target.checked)
  }
}
