import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InterpreterService } from '../../../../services/modules/interpreter.service';
import { SearchService } from '../../../../services/modules/search.service';
import { Interpreter } from '../../../../models/interpreters.model';
import { ErrorHandlerService } from '../../../../services/help/error-handler.service';
import { MzToastService } from 'ngx-materialize';
import { Router } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  interpreterData = { type: '', name: '', rank: '', subRank: '', dateDeath: '', numbersExplanation: '', information: '' };
  interpreterForm: FormGroup;
  autocompleteOptions = {
    data: {
      "~~!~~!": 'https://placehold.it/250x250'
    }
  };

  constructor(
    private router: Router,
    private _interpreter: InterpreterService,
    private _errHandler: ErrorHandlerService,
    private _search: SearchService,
    private toastService: MzToastService,
  ) {
    this.interpreterForm = new FormGroup({
      'type': new FormControl(this.interpreterData.type, [Validators.required]),
      'name': new FormControl(this.interpreterData.name, [Validators.required]),
      'rank': new FormControl(this.interpreterData.rank, [Validators.required]),
      'subRank': new FormControl(this.interpreterData.subRank, [Validators.required]),
      'dateDeath': new FormControl(this.interpreterData.dateDeath, [Validators.required]),
      'numbersExplanation': new FormControl(this.interpreterData.numbersExplanation, [Validators.required]),
      'information': new FormControl(this.interpreterData.information, [Validators.required])
    });

  }

  send() {
    let interpreter = new Interpreter(this.interpreterData);
    console.log(interpreter);
    // this._interpreter.add(interpreter, localStorage.getItem('token')).subscribe(
    //   (done) => {
    //     this.router.navigate(['dashboard', 'interpreters', 'list']);
    //   },
    //   (err) => {
    //     this.showToast(err);
    //   }
    // );
  }


  // searchTopic(
  //   input = 'mz-chip-input input',
  //   inWhateYouWantToSearch,
  //   OrginalSearchResult,
  //   autoComplateObject,
  //   tagName) {
  //   let searchValue = $(input).val();
  //   this._search
  //     .search(inWhateYouWantToSearch, searchValue)
  //     .subscribe(
  //       (data) => {
  //         data['docs'].forEach(element => {
  //           this[OrginalSearchResult].push(element);
  //           this[autoComplateObject].data[element[tagName]] = 'https://placehold.it/250x250';
  //         });
  //       },
  //       (err) => console.log(err)
  //     );
  // }

  // onAddTopic(
  //   e,
  //   input = 'mz-chip-input input',
  //   OrginalSearchResult,
  //   autoComplateObject,
  //   ngModel: any,
  //   field, 
  //   tagName,
  //   multi = false) {
  //   if (!multi) $(input).hide();
  //   if (this[autoComplateObject]['data'][e.tag] === 'https://placehold.it/250x250') {
  //     let data = this[OrginalSearchResult].filter((it) => it[tagName] === e.tag)[0];
  //     let fields = field.split('.');
  //     this[fields[0]][fields[1]] = data['_id'];
  //     console.log('yes', this[ngModel]);
  //   } else {
  //     console.log('no',  this[ngModel].pop(),  this[ngModel]);
  //     this[ngModel] = this[ngModel].filter((it) => it.tag !== e.tag);
  //   }
  // }

  // onDeleteTopic(e, ngModel, field) {
  //   this[ngModel] = this[ngModel].filter((it) => it.tag !== e.tag);
  //   let fields = field.split('.');
  //   this[fields[0]][fields[1]] = '';
  // }

  // onSelectTopic(e) {
  // }

  showToast(ms, err = true) {
    $('#toast-container').find('.toast').remove();
    this.toastService.show(
      (err) ? this._errHandler.Error_Handler(ms) : ms
      , 4000, 'red');
  }

  ngOnInit() {
  }

}
