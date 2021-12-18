import { Pipe, PipeTransform } from '@angular/core';
import { MonHoc } from 'src/app/core/models/mon-hoc.model';

@Pipe({
  name: 'rightSidebar'
})
export class RightSidebarPipe implements PipeTransform {

  transform(value: MonHoc[], keyword: string): any {
    const filterArr: MonHoc[] = [];
    value.forEach(m=>{
      if(m.ten.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()) || m.maMonHoc.toLocaleLowerCase().includes(keyword)){
        filterArr.push(m);
      }
    });
    return filterArr;
  }

}
