import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddsymbolComponent } from './addsymbol/addsymbol.component';
import { EditsymbolComponent } from './editsymbol/editsymbol.component';
import { ViewsymbolComponent } from './viewsymbol/viewsymbol.component';
import { ListsymbolComponent } from './listsymbol/listsymbol.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MzIconModule,MzIconMdiModule, MzSelectModule } from 'ngx-materialize'



@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MzSelectModule,
    MzIconModule,
    MzIconMdiModule 
  ],
  declarations: [AddsymbolComponent, EditsymbolComponent, ViewsymbolComponent, ListsymbolComponent]
})
export class SymbolsModule { }
