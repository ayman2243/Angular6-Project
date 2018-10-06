import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AyatAddComponent } from './ayat-add/ayat-add.component';
import { AyatviewComponent } from './ayatview/ayatview.component';
import { AyateditComponent } from './ayatedit/ayatedit.component';
import { AyaListComponent } from './ayatlist/ayatlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MzSelectModule, MzDatepickerModule, MzCardModule, MzCollapsibleModule, MzModalModule } from 'ngx-materialize'
import {MzIconModule,MzIconMdiModule } from 'ngx-materialize'
import { MzInputModule,MzNavbarModule ,MzButtonModule , MzDropdownModule ,MzBadgeModule , MzTextareaModule, MzPaginationModule } from 'ngx-materialize'
import { RouterModule} from '@angular/router';
import { SearchayaPipe } from '../../../pipes/searchaya.pipe';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
     ReactiveFormsModule,
     MzSelectModule,
     MzIconModule,
     MzIconMdiModule,
     MzNavbarModule,
     MzButtonModule,
     RouterModule,
     MzDropdownModule,
     MzBadgeModule,
     MzInputModule,
     MzTextareaModule,MzIconModule, 
     MzIconMdiModule, 
     MzCardModule, 
     MzCollapsibleModule, 
     MzInputModule, 
     MzTextareaModule, 
     MzBadgeModule, 
     MzModalModule,
     MzSelectModule,
     MzDatepickerModule,
     MzPaginationModule
    
  ],
  declarations: [ AyaListComponent, AyatAddComponent, AyatviewComponent, AyateditComponent,SearchayaPipe, DeleteComponent]
  
})
export class AyatModule { }
