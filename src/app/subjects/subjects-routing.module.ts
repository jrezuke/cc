import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsListComponent } from './subjects-list.component';
import { SubjectsComponent } from './subjects.component';
import { SubjectEditComponent } from './subject-edit.component';
import { SubjectsNewComponent } from './subjects-new.component';
import { SubjectResolver } from './subject.resolver';
import { EntriesComponent } from '../entries/entries.component';
import { EntryComponent } from '../entry/entry.component';
import { FluidInfusionsComponent } from '../entry/fluid-infusions/fluid-infusions.component';
import { ParenteralNutritionComponent } from '../entry/parenteral-nutrition/parenteral-nutrition.component';


const subjectsRoutes: Routes = [
  {
    path: '', component: SubjectsComponent,
    children: [
      { path: '', component: SubjectsListComponent },
      { path: 'new', component: SubjectsNewComponent }
    ]
  },
  {
    path: ':id', component: SubjectEditComponent,
      resolve: { subjectEdit: SubjectResolver },
      children:[        
        { 
          path: 'entries', component: EntriesComponent,
          children: [
            {
              path: ':id', component: EntryComponent,
              children: [
                {
                  path: 'fluid-infusions', component: FluidInfusionsComponent
                },
                {
                  path: 'parenteral-nutrition', component: ParenteralNutritionComponent
                }
              ]
            }
          ]
        }
      ]
    
  },


];

@NgModule({
  imports: [RouterModule.forChild(subjectsRoutes)],
  exports: [RouterModule]

})
export class SubjectsRoutingModule { }
