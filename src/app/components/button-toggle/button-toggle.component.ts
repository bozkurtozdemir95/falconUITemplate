import {Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'falcon-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit, AfterViewInit {
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
