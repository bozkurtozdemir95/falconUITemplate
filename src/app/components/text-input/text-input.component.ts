import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'falcon-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() label: boolean = false;
  @Input() disabled: boolean = false;
  @Input() name: string = '';
  value = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(value: any): void {
    console.log(value.value);
  }
}
