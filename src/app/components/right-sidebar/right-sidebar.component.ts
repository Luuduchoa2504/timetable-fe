import { Component, OnInit } from '@angular/core';
import { MonHoc } from 'src/app/core/models/mon-hoc.model';
import { ContentService } from '../content/content.service';
import { RightSidebarService } from './right-sidebar.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {
  monhocs: MonHoc[] = [];
  keyword = '';
  tempMonHoc: MonHoc[] = [];

  constructor(private rightSidebarService: RightSidebarService, private contentService: ContentService) { }

  ngOnInit(): void {
    this.rightSidebarService.getAllMonHoc().subscribe((monHocs: MonHoc[]) => {
      this.monhocs = monHocs;
    });
  }

  onChecked($event: any, monhoc: MonHoc) {
    monhoc.isActive = !monhoc.isActive;
    if (monhoc.isActive){
      if (!this.tempMonHoc.includes(monhoc)){
        this.tempMonHoc.push(monhoc);
      }
    }else {
      this.tempMonHoc = this.tempMonHoc.filter(x=>x!==monhoc);
    }
  }

  removeMonHoc($event: Event, monhoc: MonHoc) {
    monhoc.isActive = !monhoc.isActive;
    this.tempMonHoc = this.tempMonHoc.filter(x=>x!==monhoc);
  }

  sapXep() {
    if(this.tempMonHoc.length === 0){
      return;
    }else {
      this.rightSidebarService.postDanhSachMonHoc(this.tempMonHoc);
      this.contentService.resetTkb();
    }
  }
}
