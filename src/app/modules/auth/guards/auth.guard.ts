import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetUser } from '../../shared/user-store/actions';
import { UserState } from '../../shared/user-store/user-state';
import { AuthService } from '../auth-page/services';

@Injectable()
export class AuthGuard implements CanActivate {

    @Select(UserState.getRole) role$!: Observable<string>;

    constructor(
        private auth: AuthService,
        private router: Router,
        private store: Store
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
        return this.role$.subscribe((userRole) => {
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
        });
    }
}
