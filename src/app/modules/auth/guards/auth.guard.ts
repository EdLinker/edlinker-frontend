import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { User } from 'src/models';
import { UserState } from '../../shared/user-store/user-state';
import { AuthService } from '../auth-page/services';

@Injectable()
export class AuthGuard implements CanActivate {

    @Select(UserState.getUser)
    user$!: Observable<User>;

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
        const userRole = this.store.selectSnapshot(UserState.getRole);
        if (!routeRoles || routeRoles.indexOf(userRole) !== -1) {
            return true;
        } if (userRole === 'student') {
            return false;
        } else {
            this.router.navigate(['']);
            return false;
        }
    };
}
