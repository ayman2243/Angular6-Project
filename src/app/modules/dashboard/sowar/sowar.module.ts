import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { MzSelectModule } from 'ngx-materialize'
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MzIconModule,MzIconMdiModule,MzCheckboxModule, 
  MzNavbarModule, 
  MzDropdownModule, 
  MzButtonModule, 
  MzCardModule, 
  MzCollapsibleModule, 
  MzInputModule, 
  MzTextareaModule, 
  MzBadgeModule, 
  MzModalModule,
  MzPaginationModule } from 'ngx-materialize'
import { SearchSurahPipe } from '../../../pipes/search-surah.pipe';
import { DeletesurahComponent } from './deletesurah/deletesurah.component';
@NgModule({
  imports: [
    CommonModule,
    MzSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MzIconModule,
    MzIconMdiModule,MzCheckboxModule, 
    MzNavbarModule, 
    MzDropdownModule, 
    MzButtonModule, 
    MzCardModule, 
    MzCollapsibleModule, 
    MzInputModule, 
    MzTextareaModule, 
    MzBadgeModule, 
    MzModalModule,
    RouterModule,
    MzPaginationModule
  ],
  declarations: [AddComponent, ListComponent, EditComponent, ViewComponent, SearchSurahPipe, DeletesurahComponent]
})
export class SowarModule { }
