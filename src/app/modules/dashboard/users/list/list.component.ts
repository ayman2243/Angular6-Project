import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MzModalService } from 'ngx-materialize';
import { DeleteComponent } from '../delete/delete.component';
import { UsersService } from '../../../../services/modules/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  entryComponents: [DeleteComponent]
})
export class ListComponent implements OnInit {

  viewStyle = (!localStorage.getItem('userViewStyle'))? 'table' : 
              localStorage.getItem('userViewStyle');
  users;
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private modalService: MzModalService, 
              public _user: UsersService) {
    this.getUsers(Number(this.route.snapshot.params['page']) || 1);
  }

  view(id){
    this.router.navigate([`./dashboard/users/view/${id}`]);
  }

  edit(id){
    this.router.navigate([`./dashboard/users/edit/${id}`]);
  }

  delete(id, name){
    this.modalService.open(DeleteComponent, {id, name});
  }

  changeView(vStyle){
    localStorage.setItem('userViewStyle', vStyle);
    this.viewStyle = localStorage.getItem('userViewStyle');
  }

  onPageChange(pageNumber){
    this.router.navigate([`/dashboard/users/list/${pageNumber}`]);
  }

  getUsers(page: Number = 1){
    this._user.list(page, localStorage.getItem('token')).subscribe(
      (users) => {
        this.users = users;
      },
      (err) => console.log(err) 
    );
  }

  ngOnInit() {
    this.getUsers(Number(this.route.snapshot.params['page']) || 1);
  }

  ngOnDestroy(){
  }

}
