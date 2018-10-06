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
        MzPaginationModule,
        MzChipModule,
        MzSelectModule,
        MzDatepickerModule } from 'ngx-materialize';
import { AutoCompleteDirective } from '../../../directives/auto-complete.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchInterpretersPipe } from '../../../pipes/search-interpreters.pipe';
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
    MzDatepickerModule,
    MzPaginationModule,
    MzSelectModule,
    MzChipModule
  ],
  declarations: [ListComponent, AddComponent, ViewComponent, EditComponent, DeleteComponent, SearchInterpretersPipe, AutoCompleteDirective]
})
export class InterpretersxModule { }
