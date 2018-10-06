import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InterpreterService } from '../../../../services/modules/interpreter.service';
import { Interpreter } from '../../../../models/interpreters.model';
import { ErrorHandlerService } from '../../../../services/help/error-handler.service';
import { SearchService } from '../../../../services/modules/search.service';
import { MzToastService } from 'ngx-materialize';
import { Router, ActivatedRoute } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  interpreterData = { type: '', name: '', rank: '', subRank: '', dateDeath: '', numbersExplanation: '', information: '' };
  interpreterForm: FormGroup;
  topics = [];
  topicsDocs = [];
  autocompleteOptions = {
    data: {
      "~~!~~!": 'https://placehold.it/250x250'
    }
  };

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    public _interpreter: InterpreterService, 
    public _errHandler: ErrorHandlerService,
    private _search: SearchService,
    private toastService: MzToastService
  ) {
    this._interpreter.view(this.route.snapshot.params['id']).subscribe(
      (interpreter) =>{
        console.log(interpreter);
        Object.assign(this.interpreterData, interpreter);
      },
      (err) =>{ this.showToast(err); 
    });

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

  edit(){
    let interpreter = new Interpreter(this.interpreterData)
    this._interpreter.edit(this.route.snapshot.params['id'],interpreter, localStorage.getItem('token')).subscribe(
      (done) =>{
        this.router.navigate(['dashboard','interpreters','list']);
      },
      (err) => {
        this.showToast(err);
      }
    )
  }

  onAddTopic(e) {
    if (this.autocompleteOptions.data[e.tag] === 'https://placehold.it/250x250') {
      $('.chipView').css({ display: 'block' });
      $('.chipInput').css({ display: 'none' });
      let topicDoc = this.topicsDocs.filter(
                            it => 
                            it.headline === e.tag || 
                            it._id === e._id
                            )[0];
      this.interpreterData.information = topicDoc._id;
    }
    else {
      this.topics = [];
      $('mz-chip-input .chip').remove();
    }
  }
 
  onDeleteSelectedTopic(e){
      this.topics = [];
      $('mz-chip-input .chip').remove();
      $('.chipView').css({ display: 'none' });
      $('.chipInput').css({ display: 'block' });
      this.interpreterData.information = '';
  }

  async searchTopic(input = null) {
    this._search.search('topic', input || $('mz-chip-input input').val()).subscribe(
      (data) => {
        data['docs'].forEach(element => {
          this.topicsDocs.push(element);
          this.autocompleteOptions.data[element.headline] = 'https://placehold.it/250x250';
        });
        return true
      },
      (err) => {
        return false;
      }
    );
  }

  showToast(ms, err = true){
    $('#toast-container').find('.toast').remove();
    this.toastService.show(
      (err) ? this._errHandler.Error_Handler(ms) : ms
    , 4000, 'red');
  }

  ngOnInit() {
  }

}
