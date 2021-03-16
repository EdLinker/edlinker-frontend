import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPostComponent } from './components/shared-post/shared-post.component';

import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SharedPostComponent],
  imports: [
    MatCardModule,
    CommonModule,
    MatChipsModule
  ],
  exports: [SharedPostComponent]
})
export class SharedPostModule { }
