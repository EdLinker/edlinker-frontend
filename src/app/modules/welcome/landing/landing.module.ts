import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { landingRouting } from './landing.routing';
import { SharedHeaderModule } from '../../shared';
import { LandingViewComponent } from './components';

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
