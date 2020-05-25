// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class NotificationService {

//   constructor() { }
// }

import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class NotificationService implements OnInit{

  constructor(private toastr: ToastrService) { }

  ngOnInit(){}

  showSuccessNotification(message:string){
    this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span>' +  message, 'Success Notification', {
      timeOut: 5000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-success alert-with-icon",
      positionClass: 'toast-' + 'top' + '-' +  'right'
    });
  }

  showErrorNotification(message:string){
    this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span>' + message, 'Error Notification', {
      timeOut: 8000,
      enableHtml: true,
      closeButton: true,
      toastClass: "alert alert-danger alert-with-icon",
      positionClass: 'toast-' + 'top' + '-' +  'right'
    });
  }

  showWarningNotification(message:string){
    this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span>' + message, 'Warning Notification', {
      timeOut: 5000,
      enableHtml: true,
      closeButton: true,
      toastClass: "alert alert-warning alert-with-icon",
      positionClass: 'toast-' + 'top' + '-' +  'right'
    });
  }
}