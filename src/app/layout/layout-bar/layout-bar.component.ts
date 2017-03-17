import { Component, OnInit, Input } from '@angular/core';
import { LayoutBarItem } from './layout-bar-item/layout-bar-item';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'layout-bar',
  templateUrl: './layout-bar.component.html',
  styleUrls: ['./layout-bar.component.css']
})
export class LayoutBarComponent implements OnInit {
  @Input() layoutBarItems: LayoutBarItem[];
  @Input() expanded: boolean;

  constructor(private _router:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    console.log("LayoutBarComponent.ngOnInit expanded", this.expanded);
  }

  // onItemClick(item: LayoutBarItem){
  //   console.log("LayoutBarComponent.onItemClick", item);
  //   console.log("actvRoute:", this._activatedRoute);
  //   let path = "/" + item.route as any;
  //   //this._router.navigate(['home'], {relativeTo:this._activatedRoute})
  // }

}
