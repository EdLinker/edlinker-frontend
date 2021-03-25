import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedBreadcrumbsModule } from './modules/shared/shared-breadcrumbs';
import { SharedHeaderModule } from './modules/shared/shared-header';
import { AuthGuard } from './modules/auth/guards';
import { AuthService } from './modules/auth/auth-page/services';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './modules/shared/layout/layout.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot(),
    SharedBreadcrumbsModule,
    SharedHeaderModule,
    HttpClientModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
