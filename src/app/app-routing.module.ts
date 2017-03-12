import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, PreloadingStrategy } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EntryComponent } from './entry/entry.component';
import { EntryNewComponent } from './entry/entry-new/entry-new.component';
import { EntryEditComponent } from './entry/entry-edit/entry-edit.component';


const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  //{ path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'subjects', loadChildren: 'app/subjects/subjects.module#SubjectsModule' },
  { path: 'sites', loadChildren: 'app/sites/sites.module#SitesModule' },
  { path: 'entry', component: EntryComponent,
    children: [
      { path: 'new', component: EntryNewComponent },
      { path: 'edit', component: EntryEditComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing:false })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { };

