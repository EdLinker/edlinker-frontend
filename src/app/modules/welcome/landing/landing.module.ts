import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { landingRouting } from './landing.routing';
import { LandingViewComponent } from './components';
import { SharedHeaderModule } from '../../shared';

@NgModule({
    imports: [
        RouterModule.forChild(landingRouting),
        SharedHeaderModule
    ],
    exports: [],
    declarations: [LandingViewComponent],
    providers: [],
})
export class LandingModule { }
