import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NhomMonHoc } from 'src/app/core/models/mon-hoc.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  tkbSubject = new Subject<NhomMonHoc[]>();
  constructor() { }

  postTKB(tkb: NhomMonHoc[]) {
    this.tkbSubject.next(tkb);
  }

  resetTkb() {
    for (let i = 2; i <=8 ; i++) {
      for (let j = 1; j <=14 ; j++) {
        const index = i+ '' +j;
        document.getElementById(index).style.background = 'None';
      }
    }
  }
}
