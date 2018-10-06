import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, AddComponent, ViewComponent, EditComponent, DeleteComponent]
})
export class PermissionsModule { }
