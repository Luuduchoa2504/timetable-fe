import { Component, OnInit } from '@angular/core';
import { NhomMonHoc } from 'src/app/core/models/mon-hoc.model';
import { ContentService } from '../content/content.service';
import { RightSidebarService } from '../right-sidebar/right-sidebar.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  tkb: Array<NhomMonHoc[]> = [];

  constructor(private rightSidebarService: RightSidebarService,private contentService: ContentService) { }

  ngOnInit(): void {
    this.rightSidebarService.listTKB.subscribe(res =>{
      this.tkb = res;
    });
  }

  chooseTKB(tkb: NhomMonHoc[]) {
    this.contentService.postTKB(tkb);
  }
}
