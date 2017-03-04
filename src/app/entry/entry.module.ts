import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryComponent } from './entry.component';
import { SubjectInfoComponent } from './subject-info/subject-info.component';
import { EntryNewComponent } from './entry-new/entry-new.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  declarations: [EntryComponent, SubjectInfoComponent, EntryNewComponent]
})
export class EntryModule { }
