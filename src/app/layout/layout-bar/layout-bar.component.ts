import { Component, OnInit, Input } from '@angular/core';
import { LayoutBarItem } from './layout-bar-item/layout-bar-item';

@Component({
  selector: 'layout-bar',
  templateUrl: './layout-bar.component.html',
  styleUrls: ['./layout-bar.component.css']
})
export class LayoutBarComponent implements OnInit {
  @Input() layoutBarItems: LayoutBarItem[];
  @Input() expanded: boolean;

  constructor() { }

  ngOnInit() {
    console.log("LayoutBarComponent.ngOnInit expanded", this.expanded);
  }

}
