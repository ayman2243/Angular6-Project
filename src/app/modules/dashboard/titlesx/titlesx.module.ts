import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AppRoutingModule } from './../../../app-routing.module';
import { MzCheckboxModule, MzNavbarModule, MzDropdownModule, MzButtonModule,
  MzIconModule, MzSelectModule, MzPaginationModule, MzIconMdiModule, MzCardModule, MzCollapsibleModule, MzInputModule, MzTextareaModule, MzBadgeModule, MzModalModule } from 'ngx-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchTitlesPipe } from '../../../pipes/search-titles.pipe';

@NgModule({
  imports: [
    CommonModule,
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
    MzSelectModule,
    MzPaginationModule
  ],
  declarations: [ListComponent, AddComponent, ViewComponent, EditComponent, DeleteComponent, SearchTitlesPipe]
})
export class TitlesxModule { }
