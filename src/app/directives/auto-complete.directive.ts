import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  Renderer
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { SearchService } from '../services/modules/search.service';
import * as $ from "jquery";

@Directive({
  selector: '[appAutoComplete]',
  providers: [NgModel]
})
export class AutoCompleteDirective implements OnInit {

  private element: HTMLElement;

  constructor(private elRef: ElementRef,
    private renderer: Renderer,
    private ngModel: NgModel,
    private _search: SearchService) {

    this.element = this.elRef.nativeElement;
  }

  @HostListener('click') onclick() {
    this.search();
  }

  @HostListener('load') onload() {
    this.search();
  }

  @HostListener('keyup') onkeyup() {
    this.search();
  }

  @HostListener('keydown') onkeydown() {
    this.search();
  }

  @HostListener('keypress') onkeypress() {
    this.search();
  }

  @HostListener('add', ['$event']) add(e) {

    if (this.element.querySelectorAll('.chip').length > 1 &&
      this.element.getAttribute('multi') !== "true") {
        this.element.querySelectorAll('.chip')[this.element.querySelectorAll('.chip').length - 1].remove();
        alert('لا يمكنك اضافة اكثر من موضوع واحد');
    }


    // try{
    //   let id = e.tag.split('||')[1].trim();
    // }catch(e){
    //   this.ngModel.update.emit('');
    //   this.element.querySelectorAll('.chip')[this.element.querySelectorAll('.chip').length - 1].remove();
    // }

    // this._search.search(
    //   this.element.getAttribute('searchFiled'),
    // )
    //   .subscribe(
    //     (res: Array<any>) => {
    //       if (res.length > 0) {
    //         this.ngModel.update.emit(e.tag.split('||')[0].trim());
    //         this.element.querySelector('input').style.display = "none";
    //         console.info('add: ', e);
    //       }
    //       else {
    //         this.ngModel.update.emit('');
    //         this.element.querySelector('.chip').remove();
    //       }
    //     },
    //     (err) => {
    //     }
    //   );
  }

  @HostListener('select', ['$event']) select(e) {
    console.info('select: ', e);
  }

  @HostListener('delete', ['$event']) delete(e) {
    console.info('delete: ', e);
  }

  @HostListener('ngModelChange', ['$event']) ngModelChanger(e: Array<any>) {
    if (this.element.querySelectorAll('.chip').length > 1 &&
      this.element.getAttribute('multi') !== "true") {
        this.ngModel.update.emit(e.pop());
    }
    console.info('ngModelChanger: ', e);
  }


  search() {
    console.log(
      this.element.querySelector('input').value,
      this.element.getAttribute('searchFiled'));
    this._search.search(this.element.getAttribute('searchFiled'),
      this.element.querySelector('input').value)
      .subscribe(
        (res: Array<any>) => {
          res['docs'].forEach(element => {
            this.renderer.invokeElementMethod(
              this.element.querySelector('ul'),
              'insertAdjacentHTML',
              ['beforeend', `<li>
              <a style="display:none !important;">${element.headline}</a>
              </li>`]);
          });
        }
      );
  }

  ngOnInit() {
  }

}
