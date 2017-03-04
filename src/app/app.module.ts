import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { EntryModule } from './entry/entry.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { LayoutBodyComponent } from './layout/layout-body/layout-body.component';
import { LayoutFooterComponent } from './layout/layout-footer/layout-footer.component';
import { LayoutBarComponent } from './layout/layout-bar/layout-bar.component';
import { LayoutBarItemComponent } from './layout/layout-bar/layout-bar-item/layout-bar-item.component';
import { LayoutService } from './layout/layout.service';
import { SitesService } from './sites/sites.service';
import { SubjectsService } from './subjects/subjects.service';
import { EntryService } from './entry/entry.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LayoutHeaderComponent,
    LayoutBodyComponent,
    LayoutFooterComponent,
    LayoutBarComponent,
    LayoutBarItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    EntryModule
  ],
  providers: [LayoutService, SitesService, SubjectsService,
    EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
