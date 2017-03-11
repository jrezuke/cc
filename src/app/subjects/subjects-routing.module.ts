import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsListComponent } from './subjects-list.component';
import { SubjectsComponent } from './subjects.component';
import { SubjectEditComponent } from './subject-edit.component';
import { SubjectsNewComponent } from './subjects-new.component';
import { SubjectResolver } from './subject.resolver';
import { EntriesComponent } from '../entries/entries.component';
import { SubjectsTestComponent } from './subjects-test.component';
const subjectsRoutes: Routes = [
  {
    path: '', component: SubjectsComponent,
    children: [
      { path: '', component: SubjectsListComponent, outlet: 'subjects' },
      { path: 'new', component: SubjectsNewComponent }
    ]
  },
  {
    path: ':id', component: SubjectEditComponent,
      resolve: { subjectEdit: SubjectResolver },
      children:[
        {path: 'edit', component: SubjectsTestComponent, outlet: 'subjects'}
        //{ path: 'entries', component: EntriesComponent, outlet: 'subjects'}
      ]
    
  },


];

@NgModule({
  imports: [RouterModule.forChild(subjectsRoutes)],
  exports: [RouterModule]

})
export class SubjectsRoutingModule { }
