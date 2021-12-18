import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { LeftSidebarPipe } from './left-sidebar/left-sidebar.pipe';
import { ComponentsComponent } from './components.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RightSidebarPipe } from './right-sidebar/right-sidebar.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    ContentComponent,
    FooterComponent,
    ComponentsComponent,
    RightSidebarPipe,
    LeftSidebarPipe,
    RightSidebarPipe
  ],
  exports: [
    HeaderComponent,
    LeftSidebarComponent,
    ContentComponent,
    RightSidebarComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class ComponentsModule { }
