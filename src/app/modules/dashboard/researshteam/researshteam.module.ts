import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTeamComponent } from './list-team/list-team.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { ViewTeamComponent } from './view-team/view-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MzSelectModule, MzToastModule } from 'ngx-materialize'

import { DeleteTeamComponent } from './delete-team/delete-team.component';
import { AppRoutingModule } from './../../../app-routing.module';
import { SearchTeamPipe } from '../../../pipes/search-team.pipe';
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
  declarations: [ListTeamComponent, AddTeamComponent, EditTeamComponent, ViewTeamComponent, DeleteTeamComponent,SearchTeamPipe]
})
export class ResearshteamModule { }
