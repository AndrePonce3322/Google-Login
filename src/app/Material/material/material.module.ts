import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatSlideToggleModule,
    MatButtonModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule
  ]

})
export class MaterialModule { }
