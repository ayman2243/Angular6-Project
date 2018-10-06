import { Component, OnInit } from '@angular/core';
import { AyatService } from '../../../../services/modules/ayat.service';
import { ActivatedRoute } from '@angular/router';
import { MzModalService } from 'ngx-materialize';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-ayatview',
  templateUrl: './ayatview.component.html',
  styleUrls: ['./ayatview.component.scss']
})
export class AyatviewComponent implements OnInit {
  aya;
  constructor(private ayatService: AyatService, 
              private route: ActivatedRoute, 
              private modalService: MzModalService) {
    this.viewAya(this.route.snapshot.params['id']);
  }

  ngOnInit() {
  }

  viewAya(id) {
    this.ayatService.getAya(id).subscribe((res) => {
      this.aya = res
    });
  }

  delete(id, name) {
    this.modalService.open(DeleteComponent, { id, name });
  }

}
