import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicContentComponent } from '../modules/results/dynamic-content/dynamic-content.component';

@NgModule({
  declarations: [
    DynamicContentComponent  // Declare the component here
  ],
  imports: [
    CommonModule  // Import CommonModule to use Angular directives
  ],
  exports: [
    DynamicContentComponent  // Export it so it can be used in other modules
  ]
})
export class SharedModule { }