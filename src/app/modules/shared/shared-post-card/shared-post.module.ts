import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPostComponent } from './components/shared-post/shared-post.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SharedPostComponent],
  imports: [
    MatCardModule,
    CommonModule
  ],
  exports: [SharedPostComponent]
})
export class SharedPostModule { }
