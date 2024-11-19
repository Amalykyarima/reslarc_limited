import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    NzDropDownModule
  ],
  exports: []
})
export class HeaderModule { }
