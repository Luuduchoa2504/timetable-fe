import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MonHoc, NhomMonHoc } from 'src/app/core/models/mon-hoc.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RightSidebarService {
  listTKB = new Subject<Array<NhomMonHoc[]>>();
  constructor( private httpClient: HttpClient) { }
  getAllMonHoc(): Observable<any> {
    return this.httpClient.get('https://localhost:5001/api/MonHoc');
  }

  postDanhSachMonHoc(tempMonHoc: MonHoc[]) {
    return this.httpClient.post('https://localhost:5001/api/MonHoc/SapXepDanhSachMonHoc',tempMonHoc)
      .subscribe((res: Array<NhomMonHoc[]>) => {
      this.listTKB.next(res);
    });
  }
}
