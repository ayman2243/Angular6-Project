import { Component, OnInit } from '@angular/core';
import { SowarService } from '../../../../services/modules/sowar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  viewStyle = (!localStorage.getItem('surahViewStyle')) ? 'table' :
    localStorage.getItem('surahViewStyle');

  surahList;
  constructor(private sowarServices: SowarService, private router: Router) { }

  ngOnInit() {
    this.getAllSowar();
  }

  getAllSowar() {
    this.sowarServices.getAllSowar().subscribe(
      (res) => { this.surahList = res },
      (err) => console.log(err))
  }

  delete(id) {
    var result = confirm("هل تريد اتمام عمليه الالغاء ؟ ");
    if (result) {
      this.sowarServices.deleteSurah(id, localStorage.getItem('token')).subscribe((res) => {
        this.getAllSowar();
      }, (err) => {
        console.log(err);
      });
    }
  }

  view(id) {
    this.router.navigate([`dashboard/surah/view/${id}`])
  }

  edit(id) {
    this.router.navigate([`dashboard/surah/edit/${id}`])
  }

  add() {
    this.router.navigate([`dashboard/surah/add/`])
  }

  changeView(vStyle) {
    localStorage.setItem('surahViewStyle', vStyle);
    this.viewStyle = localStorage.getItem('surahViewStyle');
  }




}

