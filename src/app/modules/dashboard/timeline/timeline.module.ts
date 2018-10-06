import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTimelineComponent } from './add-timeline/add-timeline.component';
import { EditTimelineComponent } from './edit-timeline/edit-timeline.component';
import { DeleteTimelineComponent } from './delete-timeline/delete-timeline.component';
import { ListTimelineComponent } from './list-timeline/list-timeline.component';
import { ViewTimelineComponent } from './view-timeline/view-timeline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MzSelectModule, MzToastModule } from 'ngx-materialize'
import { AppRoutingModule } from './../../../app-routing.module';
import { SearchTimelinePipe } from '../../../pipes/search-timeline.pipe';
import { MzCheckboxModule, 
  MzNavbarModule, 
  MzDropdownModule, 
  MzButtonModule,
  MzIconModule, 
  MzIconMdiModule, 
  MzCardModule, 
  MzCollapsibleModule, 
  MzInputModule, 
  MzTextareaModule, 
  MzBadgeModule, 
  MzModalModule,
  MzDatepickerModule } from 'ngx-materialize';

@NgModule({
  imports: [
    CommonModule,
    MzToastModule,
    FormsModule, ReactiveFormsModule,
    MzSelectModule,
    MzIconModule,
    MzIconMdiModule,
    MzNavbarModule, 
   MzDropdownModule, 
   MzButtonModule,
   MzCardModule, 
  MzCollapsibleModule, 
  MzInputModule, 
  MzTextareaModule, 
  MzBadgeModule, 
  MzModalModule,
  MzDatepickerModule,
  AppRoutingModule,
  MzCheckboxModule
  ],
  declarations: [AddTimelineComponent, EditTimelineComponent, DeleteTimelineComponent, ListTimelineComponent, ViewTimelineComponent,SearchTimelinePipe]
})
export class TimelineModule { }
