import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedBreadcrumbsComponent } from './components/shared-breadcrumbs.component';

@NgModule({
  declarations: [SharedBreadcrumbsComponent],
  imports: [
    CommonModule,
  ],
  exports: [SharedBreadcrumbsComponent]
})
export class SharedBreadcrumbsModule { }
