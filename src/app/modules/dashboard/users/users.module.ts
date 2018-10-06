import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MzCheckboxModule, 
          MzNavbarModule, 
          MzDropdownModule, 
          MzButtonModule,
          MzIconModule, 
          MzSelectModule, 
          MzPaginationModule, 
          MzIconMdiModule, 
          MzCardModule, 
          MzCollapsibleModule, 
          MzInputModule, 
          MzTextareaModule, 
          MzBadgeModule, 
          MzModalModule } from 'ngx-materialize';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { AppRoutingModule } from './../../../app-routing.module';
import { SearchUsersPipe } from '../../../pipes/search-users.pipe';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MzCheckboxModule, 
    MzNavbarModule, 
    MzDropdownModule, 
    MzButtonModule,
    MzIconModule, 
    MzSelectModule, 
    MzPaginationModule, 
    MzIconMdiModule, 
    MzCardModule, 
    MzCollapsibleModule, 
    MzInputModule, 
    MzTextareaModule, 
    MzBadgeModule, 
    MzModalModule
  ],
  declarations: [ 
    DeleteComponent,
    ListComponent, 
    AddComponent, 
    EditComponent, 
    ViewComponent, 
    SearchUsersPipe
    ],
  entryComponents:[DeleteComponent]
})
export class UsersModule { }
