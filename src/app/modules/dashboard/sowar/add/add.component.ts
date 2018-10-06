import { Component, OnInit } from '@angular/core';
import { Surah } from '../../../../models/surah.models';
import { SowarService } from '../../../../services/modules/sowar.service';
import { AyatService } from '../../../../services/modules/ayat.service';
import { TitlesService } from '../../../../services/modules/titles.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  surah = { surahName: "", numberOfAyat: 0, ayat: [], titles: [], _id: "" };

  ayat = []
  titles = []
  surahForm: FormGroup;
  constructor(private sowarService: SowarService, private ayatService: AyatService, private titlesService: TitlesService, private router: Router) { }

  ngOnInit() {
    this.getAllAyat();
    this.getAllTitles();

    this.surahForm = new FormGroup({
      surahName: new FormControl(this.surah.surahName, Validators.required),
      numberOfAyat: new FormControl(this.surah.numberOfAyat, Validators.required),
      ayat: new FormControl(this.surah.ayat),
      titles: new FormControl(this.surah.titles),
    });
  }


  getAllAyat() {
    this.ayatService.getAllAyat().subscribe((res) => {
    this.ayat = res
    });
  }

  getAllTitles() {
    this.titlesService.getAllTitles().subscribe((res) => {
    this.titles = res;
    });
  }

  add() {
    this.sowarService.addSurah(new Surah(this.surah), localStorage.getItem("token")).subscribe((res) => {
      alert("تمت الاضافة بنجاح")
      this.router.navigate(["dashboard/surah"])
    }, (err) => {
      alert("فشل في عملية الأضافه , برجاء مراجعة المدخلات")
      console.log(err);
    });
  }


}
