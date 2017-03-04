import { Component, Input, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationExtras, ActivatedRoute, UrlSegment } from '@angular/router';
import { LayoutBarComponent } from '../layout-bar/layout-bar.component';
import { LayoutBarItem } from '../layout-bar/layout-bar-item/layout-bar-item';
import { LayoutService } from '../layout.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'layout-body',
  templateUrl: './layout-body.component.html',
  styleUrls: ['./layout-body.component.css'],
  animations: [
    trigger('sideBarVisibility', [
            state('expanded', style({ width: '200px' })),
            state('collapsed', style({ width: '0' })),
            transition('collapsed => expanded', animate('500ms ease-in')),
            transition('expanded => collapsed', animate('500ms ease-out'))
        ])
  ]
})

export class LayoutBodyComponent implements OnInit {
  previousPath: string;
  currentPath: string;
  state: string;
  @Input() expanded: boolean;

  @Input() layoutBarItems: LayoutBarItem[];

  constructor(private _layoutService: LayoutService, private _router: Router) { }

  ngOnInit() {
    this._layoutService.state$.subscribe((state) => {
      this.state = state;
      console.log('LayoutBodyComponent state change:', this.state);
    });
    console.log('LayoutBodyComponent.ngOnInit state', this.state);
  }

  onAnimDone(event) {
    console.log('onAnimDone:', event);
            // this.showMainSideMenu2 = true;
            // this.state2 = "show";

  }

}
