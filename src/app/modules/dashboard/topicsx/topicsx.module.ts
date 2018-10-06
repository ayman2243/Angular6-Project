import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AppRoutingModule } from './../../../app-routing.module';
import { MzCheckboxModule, MzNavbarModule, MzDropdownModule, MzButtonModule,
   MzSelectModule, MzIconModule, MzIconMdiModule, MzChipModule, MzPaginationModule, MzCardModule, MzCollapsibleModule, MzInputModule, MzTextareaModule, MzBadgeModule, MzModalModule } from 'ngx-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchTopicsPipe } from '../../../pipes/search-topics.pipe';

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
    MzSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MzPaginationModule,
    MzChipModule
  ],
  declarations: [ListComponent, AddComponent, ViewComponent, EditComponent, DeleteComponent, SearchTopicsPipe]
})
export class TopicsxModule { }
