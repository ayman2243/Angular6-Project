import { Component, OnInit } from '@angular/core';
import { SowarService } from '../../../../services/modules/sowar.service';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { Router } from "@angular/router";
import { Surah } from '../../../../models/surah.models';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  oldData: any;
  surahData = { surahName: "", numberOfAyat: 0, ayat: [], titles: [], _id: "" };
  surahForm: FormGroup;
  
  constructor(private sowarServices: SowarService, private route: ActivatedRoute, private router: Router) {
    this.getSurah(this.route.snapshot.params['id']);
    this.surahForm = new FormGroup({
      surahName: new FormControl(this.surahData.surahName, Validators.required),
      numberOfAyat: new FormControl(this.surahData.numberOfAyat, Validators.required),
      ayat: new FormControl(this.surahData.ayat),
      titles: new FormControl(this.surahData.titles),
    });
  }

  ngOnInit() {
  }

  getSurah(id) {
    this.sowarServices.getSurah(id).subscribe((res) => {
      this.oldData = res;
      Object.assign(this.surahData, res);
      console.log(this.surahData, "new object");
    }), (err) => console.log(err);
  }

  cancel() {
    this.router.navigate(["dashboard/surah"])
  }

  submit() {
    this.sowarServices.editSurah(this.route.snapshot.params['id'], new Surah(this.surahData), localStorage.getItem('token')).subscribe((res) => {
      alert("تم حفظ التغييرات بنجاح")
      this.router.navigate(["dashboard/surah"])
    }, (err) => { alert("فشل في عملية الحفظ , برجاء التأكد من صحة المدخلات الجديدة") })
  }


}
