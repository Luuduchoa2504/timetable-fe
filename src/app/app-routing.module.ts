import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsRoutingModule } from './components/components-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'components',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {relativeLinkResolution: 'legacy' }),
  HomeRoutingModule,
  DetailRoutingModule,
  ComponentsRoutingModule
], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
