import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListResourceComponent } from './list-resource/list-resource.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { EditResourceComponent } from './edit-resource/edit-resource.component';
import { ViewResourceComponent } from './view-resource/view-resource.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MzSelectModule, MzToastModule } from 'ngx-materialize'
import { AppRoutingModule } from './../../../app-routing.module';

import { DeleteResourceComponent } from './delete-resource/delete-resource.component'
import { SearchResourcePipe } from '../../../pipes/search-resource.pipe';
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
    MzCheckboxModule, 
    MzNavbarModule,
    MzDropdownModule,
    MzButtonModule,
    MzIconModule, 
    MzIconMdiModule,
    MzCardModule,
    MzCollapsibleModule,
    AppRoutingModule,
    MzInputModule,
    MzTextareaModule,
    MzBadgeModule,
    MzModalModule,
    FormsModule,
    ReactiveFormsModule,
    MzDatepickerModule,
   
  ],
  declarations: [ListResourceComponent, AddResourceComponent, EditResourceComponent, ViewResourceComponent, DeleteResourceComponent,SearchResourcePipe]
})
export class ResourceModule { }
