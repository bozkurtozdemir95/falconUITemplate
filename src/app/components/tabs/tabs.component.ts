import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'falcon-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  activeButton: any;
  @Input() activeButtonID: any;
  @Input() content: any;
  @Output() valueChange = new EventEmitter<number>();
  @ViewChild('targetSlider') public targetSlider: ElementRef | any;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setSlidePosition();
  }

  selectButton(id: number, e: any) {
    this.activeButtonID = id;
    this.valueChange.emit(id);
    const width = e.target.offsetWidth;
    const left = e.target.offsetLeft;
    this.targetSlider.nativeElement.style.width = width + 'px';
    this.targetSlider.nativeElement.style.left = left + 'px';
  }

  setSlidePosition() {
    this.activeButton = document.querySelector('.button-toggle-wrapper .transparent-button.active');
    const width = this.activeButton.offsetWidth;
    const left = this.activeButton.offsetLeft;
    this.targetSlider.nativeElement.style.width = width + 'px';
    this.targetSlider.nativeElement.style.left = left + 'px';
  }
}
