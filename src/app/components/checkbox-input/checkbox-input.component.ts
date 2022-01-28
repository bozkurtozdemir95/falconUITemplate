import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'falcon-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss']
})
export class CheckboxInputComponent implements OnInit {
  @Input() text: string = '';
  @Output() valueChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  isChecked(e: any){
    this.valueChange.emit(e.target.checked)
  }

}
