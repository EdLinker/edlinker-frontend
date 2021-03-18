import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedBreadcrumbsModule } from './modules/shared/shared-breadcrumbs';
import { SharedHeaderModule } from './modules/shared/shared-header';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot(),
    SharedBreadcrumbsModule,
    SharedHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
