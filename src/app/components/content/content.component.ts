import { Component, OnInit } from '@angular/core';
import { NhomMonHoc } from 'src/app/core/models/mon-hoc.model';
import { ContentService } from './content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  selectedTKB: NhomMonHoc[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.tkbSubject.subscribe(res =>{
      this.selectedTKB = res;
      console.log(res);
      this.contentService.resetTkb();
      this.decorateTkb();
    });
  }

  private decorateTkb() {
    for (const tkb of this.selectedTKB) {
      const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
      console.log(tkb);
      for (const buoi of tkb.buois) {
        for (let i = buoi.tietBatDau; i <buoi.tietBatDau+buoi.soTiet ; i++) {
          const index = buoi.batDauLuc + '' +i;
          document.getElementById(index).style.background = color;
          console.log(index);
        }
      }
    }
  }
}
