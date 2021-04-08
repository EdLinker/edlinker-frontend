import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPostComponent } from './components/shared-post/shared-post.component';

import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { PipesModule } from '../pipes';

@NgModule({
  declarations: [SharedPostComponent],
  imports: [
    MatCardModule,
    CommonModule,
    MatChipsModule,
    PipesModule
  ],
  exports: [SharedPostComponent]
})
export class SharedPostModule { }
