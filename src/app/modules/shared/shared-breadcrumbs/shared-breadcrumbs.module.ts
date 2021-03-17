import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedBreadcrumbsComponent } from './components/shared-breadcrumbs/shared-breadcrumbs.component';

import { BreadcrumbModule } from 'primeng/breadcrumb';


@NgModule({
  declarations: [SharedBreadcrumbsComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
  ],
  exports: [SharedBreadcrumbsComponent]
})
export class SharedBreadcrumbsModule { }
