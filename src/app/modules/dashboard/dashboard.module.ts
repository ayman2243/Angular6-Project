import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../../app-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { LayoutComponent } from './layout/layout.component';
// import { AnnotationModule } from './annotation/annotation.module';
import { UsersModule } from './users/users.module';
import { FoldersModule } from './folders/folders.module';
import { TopicsxModule } from './topicsx/topicsx.module';
import { TitlesxModule } from './titlesx/titlesx.module';
import { PointsxModule } from './pointsx/pointsx.module';
import { InterpretersxModule } from './interpretersx/interpretersx.module';
import { DocumentsModule } from './documents/documents.module';
import { AnnotationxModule } from './annotationx/annotationx.module';
import{ TimelineModule } from './timeline/timeline.module';
import{ RolesModule } from './roles/roles.module';
import{ PermissionsModule } from './permissions/permissions.module';
import {  
            MzNavbarModule, 
            MzTooltipModule, 
            MzBadgeModule, 
            MzProgressModule, 
            MzSidenavModule, 
            MzSelectModule, 
            MzChipModule, 
            MzDropdownModule, 
            MzInputModule, 
            MzCollapsibleModule, 
            MzIconModule, 
            MzIconMdiModule,
            MzModalModule,
         } from 'ngx-materialize'
import { SowarModule  } from './sowar/sowar.module';
import { AyatModule } from './ayat/ayat.module';
// import { InterpreterModule } from './interpreter/interpreter.module';
// import { TopicModule } from './topic/topic.module';
// import { PointsModule } from "./points/points.module";
// import { TitlesModule } from './titles/titles.module';
import { SymbolsModule } from './symbols/symbols.module';
import { ResearshteamModule } from './researshteam/researshteam.module'
import { ResourceModule } from './resource/resource.module'


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MzNavbarModule, 
    MzSidenavModule,
    MzChipModule,
    MzInputModule,
    MzCollapsibleModule,
    // AnnotationModule,
    MzIconModule, 
    MzIconMdiModule,
    MzDropdownModule,
    UsersModule,
    SowarModule,
    AyatModule,
    MzSelectModule,
    MzIconModule,
    MzIconMdiModule,
    MzProgressModule,
    MzBadgeModule,
    MzTooltipModule,
    FoldersModule,
    TopicsxModule,
    TitlesxModule,
    PointsxModule,
    InterpretersxModule,
    AnnotationxModule,
    // InterpreterModule,
    // TopicModule,
    // PointsModule,
    // TitlesModule,
    SymbolsModule,
    ResearshteamModule,
    ResourceModule,
    DocumentsModule,
    MzModalModule,
    TimelineModule,
    RolesModule, 
    PermissionsModule
  ],
  declarations: [OverviewComponent, LayoutComponent]
  
})
export class DashboardModule { }
