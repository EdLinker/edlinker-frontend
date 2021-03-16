import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedHeaderComponent } from './components/shared-header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SharedPostComponent } from '../shared-post-card/components/shared-post/shared-post.component';
@NgModule({
  declarations: [SharedHeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [SharedHeaderComponent]
})
export class SharedHeaderModule { }
