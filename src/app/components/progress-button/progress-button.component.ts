import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'falcon-progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.scss']
})
export class ProgressButtonComponent implements OnInit {
  @Input() left = 0;
  @Input() total = 30;
  constructor() { }

  ngOnInit(): void {
  }

}
