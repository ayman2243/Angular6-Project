import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { filter } from 'rxjs/operators';
import * as $ from "jquery";
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
  @ViewChild('sidenav') sidenav: ElementRef;
  menuToggler: boolean = false;
  public Links: Array<object> = [
    {name: 'الرئيسية', router: "overview", icon: "home"},
    {
      name: 'التقارير', router: "reports", class: 'drop1',childern: [
        { name: "عام", router: "reports/users-charts", params: [], icon: "chart-line-variant" }
    ]},
    {
      name: 'المستخدمون', router: "users", class: 'drop3',
        childern: [
        { name: "الاعضاء", router: "users", icon: "account-multiple", badge: true, badgeColor: "red" },
        { name: 'الادوار', router: "roles", icon: "security" },
        { name: 'التصاريح', router: "permissions", icon: "gesture-tap" }
      ]
    },
    {
      name: 'القرآن الكريم', router: "quran", class: 'drop2',
        childern: [
        { name: "سور القرآن", router: "surah", icon: "brightness-3", badge: true, badgeColor: "blue" },
        { name: 'آيات القران الكريم', router: "aya", icon: "unfold-more-vertical" }
      ]
    },
    {
      name: 'التفسير', router: "tafser", class: 'drop2',
        childern: [
          { name: "المجلدات", router: "folders", icon: "folder-multiple" },
          { name: 'الوضوعات', router: "topics", icon: "unfold-more-vertical" },
          { name: 'عناوين التفسير', router: "titles", icon: "json"},
          { name: 'نقاط التفسير', router: "points", icon: "json"},
          { name: 'المفسرون', router: "interpreters", icon: "account-card-details"},
          { name: 'الحواشي', router: "annotations", icon: "information"},
          { name: 'الاطار الزمني للتفسير', router: "timeline", icon: "timer-sand"},
          { name: 'مصادر التفسير', router: "resource", icon: "source-fork"},
          { name: 'مستندات التفسير', router: "documents", icon: "file-document"},
          { name: 'اعضاء الموسوعه', router: "team", icon: "source-fork"}
        ]
    },
    { name: 'أعدادات الموقع', router: "settings", icon: "settings" },
    { name: 'تسجيل الخروج', router: "../logout", icon: "power" }
  ];

  constructor(
                private router: Router
              ) {}

  updateLinks(){
    this.animateView();
  }

  menuToggle(){
    let windowWidth = $( window ).width();
    if(windowWidth >= 992){
      if(this.menuToggler){
        $('.side-nav').css('transform','translateX(0%)');
        $('.side-nav').removeClass('menuClosedOnLargeScreen');
        $('main, footer').css('padding', '0px 300px 0px 0px');
        $('.side-nav-body a .mdi, .side-nav .collapsible-header i, .side-nav.fixed .collapsible-header i').css({"position": "relative",
        "right": "auto"});
        $('.side-nav span.badge').css("cssText","border-radius: 2px !important;");
        $('.side-nav span.badge').css({"right": "9px", "top": "0px"});
        $('.side-nav-header .chip img').css({"right": "auto"});
        $('.side-nav-header .chip span').css({"right": "5px"});
        $('.material-tooltip').css("cssText","display: none !important;");
        this.menuToggler = false;
      }else{
        $('.side-nav').css('transform','translateX(80%)');
        $('.side-nav').addClass('menuClosedOnLargeScreen');
        $('main, footer').css('padding', '0px 60px 0px 0px');
        $('.menuClosedOnLargeScreen .side-nav-body a .mdi, .menuClosedOnLargeScreen .side-nav .collapsible-header i, .side-nav.fixed .collapsible-header i').css({"position": "relative",
          "right": "15px"});
        $('.material-tooltip').css("cssText","display: block !important;");
        $('.side-nav span.badge').css("cssText","border-radius: 50% !important;");
        $('.side-nav span.badge').css({"right": "50px", "top": "-11px"});
        $('.menuClosedOnLargeScreen .side-nav-header .chip img').css({"right": "235px"});
        $('.menuClosedOnLargeScreen .side-nav-header .chip span').css({"right": "237px"});
        $('.menuClosedOnLargeScreen .side-nav-header .badge').css({"display": "none"});  
        this.menuToggler = true;
      }
    }
    else
      this.sidenav['opened'] = (this.sidenav['opened']) ? false : true;
  }

  ngOnInit(){
    
    this.updateLinks();
    
    setTimeout(() =>{
      $('.collapsible-accordion').find('li:first').addClass("active");
      $('.collapsible-accordion').find('.collapsible-header').addClass("active");
      $('.collapsible-body').css({"display": "block"});
      this.menuToggle();
    }, 500);
    
    $( window ).resize(function() {
      $('.side-nav, main, footer').attr("style", "");
    });

    this.router.events.pipe(
      filter(event => {
        return event instanceof NavigationEnd
      })).subscribe((event) => {
        $('.loadProgress').css("display","none");
        if($(window).width()  >= 992 && this.menuToggler){
          setTimeout(() =>{
            $('.side-nav-body[_ngcontent-c1] a[_ngcontent-c1] .mdi[_ngcontent-c1], .menuClosedOnLargeScreen .side-nav .collapsible-header i, .side-nav.fixed .collapsible-header i').css({"position": "relative",
              "right": "15px"});
          }, 1);
        }
        this.updateLinks();
    });

    this.router.events.pipe(
      filter(event => {
        $('.loadProgress').css("display","block");
        return event instanceof NavigationStart
      })).subscribe((event) => {
    });    

  }

  animateView(){
    $('.page-content').removeClass(['animated','fadeIn faster']).show();
    $('.page-content').addClass(['animated','fadeIn faster']);
    setTimeout(() =>{
      $('.loadProgress').css("display","none");
    }, 200);
  }


}
