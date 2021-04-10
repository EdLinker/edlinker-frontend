import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
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
            return of(false);
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot) {
        const routeRoles = route.data.roles as Array<string>;
        return this.auth.getRole().pipe(map((userRole) => {
                if (!routeRoles || routeRoles.indexOf(userRole) !== -1) {
                    return true;
                } if (userRole === 'student') {
                    this.router.navigate(['/student']);
                    console.log(userRole);
                    return false; //! <--------- if 404 be, will change redirect.
                } else {
                    this.router.navigate(['/teacher']);
                    console.log(userRole);
                    return false;
                }
        }));
    }
}
