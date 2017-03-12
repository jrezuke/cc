import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EntryModule } from "../entry/entry.module";

import { SubjectsComponent } from './subjects.component';
import { SubjectsListComponent } from './subjects-list.component';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectEditComponent } from './subject-edit.component';
import { SubjectsNewComponent } from './subjects-new.component';
import { SubjectResolver } from './subject.resolver';
import { EntriesComponent } from '../entries/entries.component';
import { SubjectsTestComponent } from './subjects-test.component';


@NgModule({
  imports: [SubjectsRoutingModule, CommonModule, FormsModule, EntryModule],
  declarations: [SubjectsComponent,
    SubjectsListComponent, EntriesComponent,
    SubjectEditComponent, SubjectsNewComponent, SubjectsTestComponent],
  providers: [SubjectResolver]
})

export class SubjectsModule { }
