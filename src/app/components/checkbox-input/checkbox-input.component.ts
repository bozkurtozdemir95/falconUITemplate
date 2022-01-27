import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'falcon-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss']
})
export class CheckboxInputComponent implements OnInit {
  @Input() text: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
