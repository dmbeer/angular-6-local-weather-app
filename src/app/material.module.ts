import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule
  ],
  exports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
