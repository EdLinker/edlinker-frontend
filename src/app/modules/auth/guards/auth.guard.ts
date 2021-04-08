import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth-page/services';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private auth: AuthService,
        private router: Router
    ) {

    };

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.auth.isAuthenticated()) {
            return of(true);
        } else {
            this.router.navigate(['/auth']);
            return of(true);
        }
        // return true;
    }
}
