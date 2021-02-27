import { NgModule } from '@angular/core';
import { landingRouting } from './landing.routing';
import { RouterModule } from '@angular/router';
import { LandingViewComponent } from './components';

@NgModule({
    imports: [
        RouterModule.forChild(landingRouting),
    ],
    exports: [],
    declarations: [LandingViewComponent],
    providers: [],
})
export class LandingModule { }
