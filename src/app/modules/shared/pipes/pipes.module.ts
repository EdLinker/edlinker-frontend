import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortUrlPipe } from './short-url.pipe';
import { TruncatePipe } from './truncate-text.pipe';



@NgModule({
  declarations: [ShortUrlPipe, TruncatePipe],
  imports: [
    CommonModule
  ],
  exports: [ShortUrlPipe, TruncatePipe]
})
export class PipesModule { }
