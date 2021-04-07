import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortUrlPipe } from './short-url.pipe';



@NgModule({
  declarations: [ShortUrlPipe],
  imports: [
    CommonModule
  ],
  exports: [ShortUrlPipe]
})
export class PipesModule { }
