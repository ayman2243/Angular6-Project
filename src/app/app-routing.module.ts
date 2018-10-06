import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Guards
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
// Auth
import{ LoginComponent } from './modules/auth/login/login.component';
import{ LogoutComponent } from './modules/auth/logout/logout.component';
// Dashboard
import{ LayoutComponent } from './modules/dashboard/layout/layout.component';
import{ OverviewComponent } from './modules/dashboard/overview/overview.component';
// Annotation
// import {ListAnnotationComponent} from './modules/dashboard/annotation/list-annotation/list-annotation.component';
// import {AddAnnotationComponent}from './modules/dashboard/annotation/add-annotation/add-annotation.component';
// import {ViewAnnotationComponent}from './modules/dashboard/annotation/view-annotation/view-annotation.component';
// import {EditAnnotationComponent} from './modules/dashboard/annotation/edit-annotation/edit-annotation.component';
// Users
import { ListComponent as UsersListComponent} from './modules/dashboard/users/list/list.component';
import { AddComponent as UsersAddComponent} from './modules/dashboard/users/add/add.component';
import { EditComponent as UsersEditComponent} from './modules/dashboard/users/edit/edit.component';
import { ViewComponent as UsersViewComponent } from './modules/dashboard/users/view/view.component';

// Swora
import{ ListComponent as ListSurahComponent } from './modules/dashboard/sowar/list/list.component';
import{ AyaListComponent } from './modules/dashboard/ayat/ayatlist/ayatlist.component';
import{ ViewComponent as ViewSurahComponent } from './modules/dashboard/sowar/view/view.component';
import{ EditComponent as EditSurahComponent } from './modules/dashboard/sowar/edit/edit.component';
import{ AddComponent as AddSurahComponent } from './modules/dashboard/sowar/add/add.component'
// Aya
import { AyatviewComponent } from './modules/dashboard/ayat/ayatview/ayatview.component';
import { AyatAddComponent } from './modules/dashboard/ayat/ayat-add/ayat-add.component';
import { AyateditComponent } from './modules/dashboard/ayat/ayatedit/ayatedit.component';
//folders routes
import { ListComponent as FolderListComponent } from './modules/dashboard/folders/list/list.component';
import { AddComponent as FolderAddComponent} from './modules/dashboard/folders/add/add.component';
import { ViewComponent as FolderViewComponent} from './modules/dashboard/folders/view/view.component';
import { EditComponent as FolderEditComponent} from './modules/dashboard/folders/edit/edit.component';
import { DeleteComponent as FolderDeleteComponent} from './modules/dashboard/folders/delete/delete.component';
//topics routes
import { ListComponent as TopicListComponent } from './modules/dashboard/topicsx/list/list.component';
import { AddComponent as TopicAddComponent} from './modules/dashboard/topicsx/add/add.component';
import { ViewComponent as TopicViewComponent} from './modules/dashboard/topicsx/view/view.component';
import { EditComponent as TopicEditComponent} from './modules/dashboard/topicsx/edit/edit.component';
import { DeleteComponent as TopicDeleteComponent} from './modules/dashboard/topicsx/delete/delete.component';
//titles routes
import { ListComponent as TitleListComponent } from './modules/dashboard/titlesx/list/list.component';
import { AddComponent as TitleAddComponent} from './modules/dashboard/titlesx/add/add.component';
import { ViewComponent as TitleViewComponent} from './modules/dashboard/titlesx/view/view.component';
import { EditComponent as TitleEditComponent} from './modules/dashboard/titlesx/edit/edit.component';
import { DeleteComponent as TitleDeleteComponent} from './modules/dashboard/titlesx/delete/delete.component';
//points routes
import { ListComponent as PointListComponent } from './modules/dashboard/pointsx/list/list.component';
import { AddComponent as PointAddComponent} from './modules/dashboard/pointsx/add/add.component';
import { ViewComponent as PointViewComponent} from './modules/dashboard/pointsx/view/view.component';
import { EditComponent as PointEditComponent} from './modules/dashboard/pointsx/edit/edit.component';
import { DeleteComponent as PointDeleteComponent} from './modules/dashboard/pointsx/delete/delete.component';
//interpreters routes
import { ListComponent as InterpreterListComponent } from './modules/dashboard/interpretersx/list/list.component';
import { AddComponent as InterpreterAddComponent} from './modules/dashboard/interpretersx/add/add.component';
import { ViewComponent as InterpreterViewComponent} from './modules/dashboard/interpretersx/view/view.component';
import { EditComponent as InterpreterEditComponent} from './modules/dashboard/interpretersx/edit/edit.component';
import { DeleteComponent as InterpreterDeleteComponent} from './modules/dashboard/interpretersx/delete/delete.component';
//annotations routes
import { ListComponent as AnnotationListComponent } from './modules/dashboard/annotationx/list/list.component';
import { AddComponent as AnnotationAddComponent} from './modules/dashboard/annotationx/add/add.component';
import { ViewComponent as AnnotationViewComponent} from './modules/dashboard/annotationx/view/view.component';
import { EditComponent as AnnotationEditComponent} from './modules/dashboard/annotationx/edit/edit.component';
import { DeleteComponent as AnnotationDeleteComponent} from './modules/dashboard/annotationx/delete/delete.component';
//interpreter
// import {ListInterpreterComponent} from './modules/dashboard/interpreter/list-interpreter/list-interpreter.component';
// import {AddInterpreterComponent} from './modules/dashboard/interpreter/add-interpreter/add-interpreter.component';
// import {EditInterpreterComponent} from './modules/dashboard/interpreter/edit-interpreter/edit-interpreter.component';
// import {ViewInterpreterComponent} from './modules/dashboard/interpreter/view-interpreter/view-interpreter.component';
//topics
// import {ListTopicComponent} from './modules/dashboard/topic/list-topic/list-topic.component';
// import {AddTopicComponent} from './modules/dashboard/topic/add-topic/add-topic.component';
// import {EditTopicComponent} from './modules/dashboard/topic/edit-topic/edit-topic.component';
// import {ViewTopicComponent} from './modules/dashboard/topic/view-topic/view-topic.component';
// import { ListpointComponent } from "./modules/dashboard/points/listpoint/listpoint.component";
// import {  AddpointComponent} from "./modules/dashboard/points/addpoint/addpoint.component";
// import { EditpointComponent } from "./modules/dashboard/points/editpoint/editpoint.component";
// import { ViewpointComponent } from "./modules/dashboard/points/viewpoint/viewpoint.component";
// import { AddtitleComponent } from "./modules/dashboard/titles/addtitle/addtitle.component";
// import { EdittitleComponent } from "./modules/dashboard/titles/edittitle/edittitle.component";
// import { ListtitleComponent } from "./modules/dashboard/titles/listtitle/listtitle.component";
// import { ViewtitleComponent } from "./modules/dashboard/titles/viewtitle/viewtitle.component";
import { AddsymbolComponent } from "./modules/dashboard/symbols/addsymbol/addsymbol.component";
import { ViewsymbolComponent } from "./modules/dashboard/symbols/viewsymbol/viewsymbol.component";
import { EditsymbolComponent } from "./modules/dashboard/symbols/editsymbol/editsymbol.component";
import { ListsymbolComponent } from "./modules/dashboard/symbols/listsymbol/listsymbol.component";

// researchteam
import {ListTeamComponent} from './modules/dashboard/researshteam/list-team/list-team.component';
import {AddTeamComponent}from './modules/dashboard/researshteam/add-team/add-team.component';
import {ViewTeamComponent}from './modules/dashboard/researshteam/view-team/view-team.component';
import {EditTeamComponent} from './modules/dashboard/researshteam/edit-team/edit-team.component';
import {DeleteTeamComponent} from './modules/dashboard/researshteam/delete-team/delete-team.component';
// resources
import {ListResourceComponent} from './modules/dashboard/resource/list-resource/list-resource.component';
import {AddResourceComponent}from './modules/dashboard/resource/add-resource/add-resource.component';
import {ViewResourceComponent}from './modules/dashboard/resource/view-resource/view-resource.component';
import {EditResourceComponent} from './modules/dashboard/resource/edit-resource/edit-resource.component';
import { DeletesurahComponent } from './modules/dashboard/sowar/deletesurah/deletesurah.component';
import { DeleteComponent } from './modules/dashboard/ayat/delete/delete.component';

//documents routes
import { ListComponent as DocumentsListComponent } from './modules/dashboard/documents/list/list.component';
import { AddComponent as DocumentsAddComponent} from './modules/dashboard/documents/add/add.component';
import { ViewComponent as DocumentsViewComponent} from './modules/dashboard/documents/view/view.component';
import { EditComponent as DocumentsEditComponent} from './modules/dashboard/documents/edit/edit.component';
import { DeleteComponent as DocumentsDeleteComponent} from './modules/dashboard/documents/delete/delete.component';
import{DeleteResourceComponent} from'./modules/dashboard/resource/delete-resource/delete-resource.component'
// timeline
import {ListTimelineComponent} from './modules/dashboard/timeline/list-timeline/list-timeline.component';
import {AddTimelineComponent}from './modules/dashboard/timeline/add-timeline/add-timeline.component';
import {ViewTimelineComponent}from './modules/dashboard/timeline/view-timeline/view-timeline.component';
import {EditTimelineComponent} from './modules/dashboard/timeline/edit-timeline/edit-timeline.component';
import{DeleteTimelineComponent} from'./modules/dashboard/timeline/delete-timeline/delete-timeline.component'

//roles
import { ListComponent as RolesListComponent } from './modules/dashboard/roles/list/list.component';
import { AddComponent as RolesAddComponent} from './modules/dashboard/roles/add/add.component';
import { ViewComponent as RolesViewComponent} from './modules/dashboard/roles/view/view.component';
import { EditComponent as RolesEditComponent} from './modules/dashboard/roles/edit/edit.component';

//permissions
import { ListComponent as PermissionsListComponent } from './modules/dashboard/permissions/list/list.component';
import { AddComponent as PermissionsAddComponent} from './modules/dashboard/permissions/add/add.component';
import { ViewComponent as PermissionsViewComponent} from './modules/dashboard/permissions/view/view.component';
import { EditComponent as PermissionsEditComponent} from './modules/dashboard/permissions/edit/edit.component';
import { Permission } from './models/permission.model';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [AuthGuard], 
    children: [
      {path: '', redirectTo: 'folders', pathMatch: 'full'},
      {path: 'overview', component: OverviewComponent},
      {path: 'reports', 
      children:[
        {path: '', redirectTo: 'users-charts', pathMatch: 'full'},
        {path: 'users-charts', component: OverviewComponent}
      ]},
      {path: 'settings', component: OverviewComponent},
       // annotation Module Routes Start  ----->
      // {path: 'annotation', 
      // children:[
      //   {path: '', redirectTo: 'list', pathMatch: 'full'},
      //   {path: 'list', children:[
      //     {path: '', redirectTo: '1', pathMatch: 'full'},
      //     {path: ':page', component: ListAnnotationComponent}
      //   ]},
      //   {path: 'add', component: AddAnnotationComponent},
      //   {path: 'view/:id', component:ViewAnnotationComponent},
      //   {path: 'edit/:id', component: EditAnnotationComponent}
      // ]},
      // {path:"point", children:[
      //   {path:'',redirectTo:"list",pathMatch:'full'},
      //   {path: 'list', children:[
      //     {path: '', redirectTo: '1', pathMatch: 'full'},
      //     {path: ':page', component: ListpointComponent}
      //   ]},
      //   {path:'add',component:AddpointComponent},
      //   {path:'view/:id',component:ViewpointComponent},
      //   {path:'edit/:id',component:EditpointComponent},
      // ]}, 
      // annotation Module Routes end  ----->
      // interpreter Module Routes Start  ----->
      // {path: 'interpreter', 
      // children:[
      //   {path: '', redirectTo: 'list', pathMatch: 'full'},
      //   {path: 'list', children:[
      //     {path: '', redirectTo: '1', pathMatch: 'full'},
      //     {path: ':page', component: ListInterpreterComponent}
      //   ]},
      //   {path: 'add', component: AddInterpreterComponent},
      //   {path: 'view/:id', component:ViewInterpreterComponent},
      //   {path: 'edit/:id', component: EditInterpreterComponent}
      // ]}, 
      // interpreter Module Routes end  ----->
      // topic Module Routes Start  ----->
      // {path: 'topic', 
      // children:[
      //   {path: '', redirectTo: 'list', pathMatch: 'full'},
      //   {path: 'list', children:[
      //     {path: '', redirectTo: '1', pathMatch: 'full'},
      //     {path: ':page', component: ListTopicComponent}
      //   ]},
      //   {path: 'add', component: AddTopicComponent},
      //   {path: 'view/:id', component:ViewTopicComponent},
      //   {path: 'edit/:id', component: EditTopicComponent}
      // ]}, 
      // topic Module Routes end  ----->

      // {path:"title", children:[
      //   {path:'',redirectTo:"list",pathMatch:'full'},
      //   {path: 'list', children:[
      //     {path: '', redirectTo: '1', pathMatch: 'full'},
      //     {path: ':page', component: ListtitleComponent}
      //   ]},
      //   {path:'add',component:AddtitleComponent},
      //   {path:'view/:id',component:ViewtitleComponent},
      //   {path:'edit/:id',component:EdittitleComponent}
      // ]},
      {
        path:"symbol", children:[
          {path:'',redirectTo:"list",pathMatch:'full'},
          {path: 'list', children:[
            {path: '', redirectTo: '1', pathMatch: 'full'},
            {path: ':page', component: ListsymbolComponent}
          ]},
          {path:'add',component:AddsymbolComponent},
          {path:'view/:id',component:ViewsymbolComponent},
          {path:'edit/:id',component:EditsymbolComponent}
        ]
      }
      ,{
        path: 'users',
        children:[
          {path: '', redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', children:[
            {path: '', redirectTo: '1', pathMatch: 'full'},
            {path: ':page', component: UsersListComponent}
          ]},
          {path:'add', component: UsersAddComponent},
          {path:'view/:id', component: UsersViewComponent},
          {path:'edit/:id', component: UsersEditComponent}
        ]
      },
      {
        path: 'roles',
        children:[
          {path: '', redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', children:[
            {path: '', redirectTo: '1', pathMatch: 'full'},
            {path: ':page', component: RolesListComponent}
          ]},
          {path:'add', component: RolesAddComponent},
          {path:'view/:id', component: RolesViewComponent},
          {path:'edit/:id', component: RolesEditComponent}
        ]
      },
      {
        path: 'permissions',
        children:[
          {path: '', redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', children:[
            {path: '', redirectTo: '1', pathMatch: 'full'},
            {path: ':page', component: PermissionsListComponent}
          ]},
          {path:'add', component: PermissionsAddComponent},
          {path:'view/:id', component: PermissionsViewComponent},
          {path:'edit/:id', component: PermissionsEditComponent}
        ]
      },
      
      // User Module Routes End  <-----
       // researchteam Module Routes Start  ----->
       {
        path: 'team',
        children:[
          {path: '', redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', children:[
            {path: '', redirectTo: '1', pathMatch: 'full'},
            {path: ':page', component: ListTeamComponent}
          ]},
          {path: 'add', component: AddTeamComponent},
          {path: 'view/:id', component: ViewTeamComponent},
          {path: 'edit/:id', component: EditTeamComponent},
          {path: 'delete/:id', component: DeleteTeamComponent},
        ]
      },
      //  researchteam Module Routes End  
      // researchteam Module Routes Start  ----->
      {
        path: 'resource',
        children:[
          {path: '', redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', children:[
            {path: '', redirectTo: '1', pathMatch: 'full'},
            {path: ':page', component: ListResourceComponent}
          ]},
          {path: 'add', component: AddResourceComponent},
          {path: 'view/:id', component: ViewResourceComponent},
          {path: 'edit/:id', component: EditResourceComponent},
          {path: 'delete/:id', component: DeleteResourceComponent}
        ]
      },
      //  researchteam Module Routes End  
      // timeline Module Routes Start  ----->
      {
        path: 'timeline',
        children:[
          {path: '', redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', children:[
            {path: '', redirectTo: '1', pathMatch: 'full'},
            {path: ':page', component: ListTimelineComponent}
          ]},
          {path: 'add', component: AddTimelineComponent},
          {path: 'view/:id', component: ViewTimelineComponent},
          {path: 'edit/:id', component: EditTimelineComponent},
          {path: 'delete/:id', component: DeleteTimelineComponent},
        ]
      },
      
      // timeline Module Routes End  <-----
      {path: 'surah', 
        children:[
          {path: '', redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', children:[
            {path: '', redirectTo: '1', pathMatch: 'full'},
            {path: ':page', component: ListSurahComponent}
          ]},
          {path:'add', component: AddSurahComponent},
          {path:'view/:id',component: ViewSurahComponent},
          {path:'edit/:id', component: EditSurahComponent},
          {path:'delete/:id',component:DeletesurahComponent}
        ]
      },
      {path:'aya',children:[
        {path:'',redirectTo:'list', pathMatch:'full'},
        {path: 'list', children:[
          {path: '', redirectTo: '1', pathMatch: 'full'},
          {path: ':page', component: AyaListComponent}
        ]},
        {path:'view/:id',component: AyatviewComponent},
        {path:'add', component: AyatAddComponent},
        {path:'edit/:id', component: AyateditComponent},
        {path:'delete/:id',component:DeleteComponent}

      ]},

      {path: 'interpreter', component: OverviewComponent, 
      children:[
        {path: '', redirectTo: 'list', pathMatch: 'full'},
        {path: 'list', component: OverviewComponent},
        {path: 'add', component: OverviewComponent},
        {path: 'view/:id', component: OverviewComponent},
        {path: 'edit/:id', component: OverviewComponent}
      ]},

      {path: 'folders', 
      children:[
        {path: '', redirectTo: 'list', pathMatch: 'full'},
        {path: 'list', children:[
          {path: '', redirectTo: '1', pathMatch: 'full'},
          {path: ':page', component: FolderListComponent}
        ]},
        {path: 'add', component: FolderAddComponent},
        {path: 'view/:id', component: FolderViewComponent},
        {path: 'edit/:id', component: FolderEditComponent},
        {path: 'delete/:id', component: FolderDeleteComponent}
      ]},

      {path: 'topics', 
      children:[
        {path: '', redirectTo: 'list', pathMatch: 'full'},
        {path: 'list', children:[
          {path: '', redirectTo: '1', pathMatch: 'full'},
          {path: ':page', component: TopicListComponent}
        ]},
        {path: 'add', component: TopicAddComponent},
        {path: 'view/:id', component: TopicViewComponent},
        {path: 'edit/:id', component: TopicEditComponent},
        {path: 'delete/:id', component: TopicDeleteComponent}
      ]},

      {path: 'titles', 
      children:[
        {path: '', redirectTo: 'list', pathMatch: 'full'},
        {path: 'list', children:[
          {path: '', redirectTo: '1', pathMatch: 'full'},
          {path: ':page', component: TitleListComponent}
        ]},
        {path: 'add', component: TitleAddComponent},
        {path: 'view/:id', component: TitleViewComponent},
        {path: 'edit/:id', component: TitleEditComponent},
        {path: 'delete/:id', component: TitleDeleteComponent}
      ]},

      {path: 'points', 
      children:[
        {path: '', redirectTo: 'list', pathMatch: 'full'},
        {path: 'list', children:[
          {path: '', redirectTo: '1', pathMatch: 'full'},
          {path: ':page', component: PointListComponent}
        ]},
        {path: 'add', component: PointAddComponent},
        {path: 'view/:id', component: PointViewComponent},
        {path: 'edit/:id', component: PointEditComponent},
        {path: 'delete/:id', component: PointDeleteComponent}
      ]},

      {path: 'interpreters', 
      children:[
        {path: '', redirectTo: 'list', pathMatch: 'full'},
        {path: 'list', children:[
          {path: '', redirectTo: '1', pathMatch: 'full'},
          {path: ':page', component: InterpreterListComponent}
        ]},
        {path: 'add', component: InterpreterAddComponent},
        {path: 'view/:id', component: InterpreterViewComponent},
        {path: 'edit/:id', component: InterpreterEditComponent},
        {path: 'delete/:id', component: InterpreterDeleteComponent}
      ]},

      {path: 'annotations', 
      children:[
        {path: '', redirectTo: 'list', pathMatch: 'full'},
        {path: 'list', children:[
          {path: '', redirectTo: '1', pathMatch: 'full'},
          {path: ':page', component: AnnotationListComponent}
        ]},
        {path: 'add', component: AnnotationAddComponent},
        {path: 'view/:id', component: AnnotationViewComponent},
        {path: 'edit/:id', component: AnnotationEditComponent},
        {path: 'delete/:id', component: AnnotationDeleteComponent}
      ]},

      {path: 'documents', 
      children:[
        {path: '', redirectTo: 'list', pathMatch: 'full'},
        {path: 'list', children:[
          {path: '', redirectTo: '1', pathMatch: 'full'},
          {path: ':page', component: DocumentsListComponent}
        ]},
        {path: 'add', component: DocumentsAddComponent},
        {path: 'view/:id', component: DocumentsViewComponent},
        {path: 'edit/:id', component: DocumentsEditComponent},
        {path: 'delete/:id', component: DocumentsDeleteComponent}
      ]}
      
    ]
  },
  { path: '**', redirectTo: 'dashboard' } ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
