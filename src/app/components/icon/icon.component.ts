import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'falcon-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() icon: any;
  constructor() { }

  ngOnInit(): void {
  }
}
