import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { landingRouting } from './landing.routing';
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
