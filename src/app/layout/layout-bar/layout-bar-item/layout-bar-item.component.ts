import { Component, OnInit, Input, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { LayoutBarItem } from './layout-bar-item';


@Component({
  selector: 'layout-bar-item',
  templateUrl: './layout-bar-item.component.html',
  styleUrls: ['./layout-bar-item.component.css'],
  animations: [
    trigger('visibleTrigger', [
            state('visible', style({ opacity: '1' })),
            transition('void => *', [style({ opacity: '0' }), animate('800ms 800ms')]),
            transition('* => void', [animate('300ms', style({ opacity: '0' }))])
        ])
  ]
})
export class LayoutBarItemComponent implements OnInit {
   @Input() layoutBarItem: LayoutBarItem;
   @Input() expanded: boolean;

  constructor() { }

  ngOnInit() {
  }

}
