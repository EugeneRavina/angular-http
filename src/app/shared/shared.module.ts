import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { MaterialModule } from './material-module/material.module';


@NgModule({
  declarations: [
    NavigationHeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavigationHeaderComponent,
    MaterialModule
  ]
})
export class SharedModule { }
