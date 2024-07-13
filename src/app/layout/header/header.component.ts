import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() showDrawer = new EventEmitter<void>();
  constructor() {}

  changeShowDrawer() {
    this.showDrawer.emit();
  }
  ngOnInit(): void {}
}
