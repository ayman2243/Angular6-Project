import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }
  
  Error_Handler(error){
    if (error.status === 0 || error.status === 500 ){
      return 'الرجاء التحقق من الاتصال بالشبكة';
    } else if(error.status === 404){
      return 'طلبك غير صحيح';
    }else
      return 'الرجاء التحقق من بياناتك ';
  }
}
