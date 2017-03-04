import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'subject-info',
  templateUrl: './subject-info.component.html',
  styleUrls: ['./subject-info.component.css'],
  animations: [
    trigger('divWidthTrigger', [
            state('expanded', style({ height: '100px' })),
            state('collapsed', style({ height: '28px' })),
            transition('collapsed => expanded', animate('200ms ease-in')),
            transition('expanded => collapsed', animate('200ms 200ms ease-out'))
    ]),
    trigger('iconTrigger', [
            state('collapsed', style({ transform: 'rotate(0deg)' })),
            state('expanded', style({ transform: 'rotate(180deg)' })),
            transition('collapsed => expanded', animate('200ms ease-in')),
            transition('expanded => collapsed', animate('200ms ease-out'))
    ])
    
  ]
})
export class SubjectInfoComponent implements OnInit {
  id: number = 1;
  subjectId: string = "01-001";
  weight: number = 20;
  hours: number = 24
  entryDate: Date = new Date("01-20-2017");

  expandedState: string = "expanded";
  expanded: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleExpandedState() {
        this.expandedState = this.expanded ? 'collapsed' : 'expanded';
        this.expanded = !this.expanded;
    }

}
