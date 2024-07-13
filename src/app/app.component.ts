import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';
  openDrawer: boolean = false;
  statusDrawer() {
    this.openDrawer = !this.openDrawer;
  }
  ngOnDestroy(): void {}
}
