import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedHeaderComponent } from './components/shared-header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [SharedHeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [SharedHeaderComponent]
})
export class SharedHeaderModule { }
