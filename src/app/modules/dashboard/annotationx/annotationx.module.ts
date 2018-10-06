import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AppRoutingModule } from './../../../app-routing.module';
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
        MzChipModule,
        MzSelectModule,
        MzDatepickerModule,
        MzPaginationModule } from 'ngx-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchAnnotationPipe } from '../../../pipes/search-annotation.pipe';
@NgModule({
  imports: [
    CommonModule,
    MzCheckboxModule, 
    MzNavbarModule,
    MzDropdownModule,
    MzButtonModule,
    MzIconMdiModule,
    MzIconModule, 
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
    MzSelectModule,
    MzPaginationModule,
    MzChipModule
  ],
  declarations: [ListComponent, AddComponent, ViewComponent, EditComponent, DeleteComponent, SearchAnnotationPipe]
})
export class AnnotationxModule { }
