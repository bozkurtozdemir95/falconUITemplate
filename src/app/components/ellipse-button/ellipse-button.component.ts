import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'falcon-ellipse-button',
  templateUrl: './ellipse-button.component.html',
  styleUrls: ['./ellipse-button.component.scss']
})
export class EllipseButtonComponent implements OnInit {
  @Input() icon : string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
