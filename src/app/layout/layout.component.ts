import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationExtras, ActivatedRoute, UrlSegment } from '@angular/router';

import { LayoutService } from './layout.service';
import { LayoutBarItem } from './layout-bar/layout-bar-item/layout-bar-item';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  mainBarItems: LayoutBarItem[];
  previousPath: string;
  currentPath: string;
  state = 'expanded';
  expanded = true;

  constructor(private _layoutService: LayoutService, private _router: Router) { }

  ngOnInit() {
    this._router.events.subscribe(event => {
      // if (event instanceof NavigationStart) {
      //   //this._accountService.showSpinner = true;
      //   console.log("appComponent.ngInit.this._router.events.subscribe NavigationStart-event:", event);
      //   this.onPathChange(event.url);
      // }
      if (event instanceof NavigationEnd) {
        // this._accountService.showSpinner = false;
        console.log('appComponent.ngInit.this._router.events.subscribe NavigationEnd-event:', event);
        this.onPathChange(event.url);
      }
    });
  }

  private getMainbarItems() {

  }

  private onPathChange(path: string) {
    console.log('app.component onPathChange current path:', path);
    if (this.currentPath) {
      this.previousPath = this.currentPath;
      console.log('app.component onPathChange previous path:', this.previousPath);
    }

    this.currentPath = path;
    let that = this;
    if (path === '/home' || path === '/') {

      this.expanded = true;
      this._layoutService.setState('collapsed');

      // setTimeout(function() {
      //       that.expanded = true;
      //     }, 500);

      // this.state = "collapsed";
      this._layoutService.getMainBarItems('main')
        .subscribe((res) => {
          this.mainBarItems = res;
          console.log('mainBarItems', this.mainBarItems);
        },
        (e) => console.log('error:', e),
        () => {
          console.log('complete');


          setTimeout(function() {

            that._layoutService.setState('expanded');
            setTimeout(function() {
                that.expanded = true;
            }, 500);

          }, 500);

        }
      );
    }
    if (path === '/entry/new') {
      // this.expanded = true;
      this._layoutService.setState('collapsed');
      setTimeout(function() {
            that.expanded = true;
          }, 500);
      this.mainBarItems = [];    
      
    }
    if(path.includes("entries")){

    }
    if ((path === '/entry/edit') || (path.includes("entries"))) {
      this._layoutService.getMainBarItems('entry')
        .subscribe((res) => {
          this.mainBarItems = res;
          console.log('mainBarItems', this.mainBarItems);
        },
        (e) => console.log('error:', e),
        () => {
          console.log('complete');

          // tslint:disable-next-line:no-shadowed-variable
          let that = this;
          setTimeout(function() {

            that._layoutService.setState('expanded');
            setTimeout(function() {
                that.expanded = true;
            }, 500);
          }, 500);
        }
      );
    }
  }

}
