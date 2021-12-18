import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentsComponent } from "./components.component";

const routes: Routes = [
    {
      path: 'components',
      component: ComponentsComponent
    }
  ];
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class ComponentsRoutingModule {}