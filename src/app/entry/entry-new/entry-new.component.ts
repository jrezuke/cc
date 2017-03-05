import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';
import { Subject } from '../../subjects/subject';
import { SubjectsService } from '../../subjects/subjects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-new',
  templateUrl: './entry-new.component.html',
  styleUrls: ['./entry-new.component.css'],
animations:[
  trigger('contentShow', [
    state('show', style({opacity: 1})),
    state('hide', style({opacity: 0})),    
    transition('* => show', animate('500ms ease-in')),
    transition('show => *', animate('500ms ease-out'))
  ])
]
})
export class EntryNewComponent implements OnInit {
  newEntry: Entry;  
  state = 'hide';
  subjects: Subject[] = new Array();

  constructor(private _entryService:EntryService,
  private _router: Router,
  private _subjectsService: SubjectsService) { }

  ngOnInit() {
    this.newEntry = new Entry();
    this._subjectsService.getSubjects().subscribe((res) => {
      console.log("subjects:", res);
      this.subjects = res;
    })

    var that = this;
    setTimeout(function() {
      that.state = "show"; 
    }, 1000);
    
  }
  

  onSubmit() {
    console.log("submit - entry:", this.newEntry);
    this._entryService.addEntry(this.newEntry)
      .subscribe((res) => {
        console.log("response:", res);
        this._router.navigate(['/entry/edit']);
      },
      (e: any) => {
        console.log("error:", e);
      });
  }

  onCancel() {
    console.log('onCancel');
    this._router.navigate(['/home']);
  }

}
