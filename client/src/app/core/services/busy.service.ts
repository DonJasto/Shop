import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class BusyService {
  busyReqestCount = 0;

  constructor(private spinnerService: NgxSpinnerService) {}

  busy() {
    this.busyReqestCount++;
    this.spinnerService.show(undefined, {
      type: 'line-scale-pulse-out',
      bdColor: 'rgba(255,255,255,0.7)',
      color: '#fff',
    });
  }

  idile() {
    this.busyReqestCount--;
    if (this.busyReqestCount <= 0) {
      (this.busyReqestCount = 0), this.spinnerService.hide();
    }
  }
}
