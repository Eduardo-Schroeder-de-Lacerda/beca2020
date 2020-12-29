import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { Section1Component } from './section1/section1.component';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    Section1Component
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
