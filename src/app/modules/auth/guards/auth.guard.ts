import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { User } from 'src/models';
import { GetUser } from '../../shared/user-store/actions';
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

    checkRole(routeRoles: Array<string>, userRole: string) {
        if (routeRoles?.indexOf(userRole) !== -1) {
            return true;
        } else {
            this.router.navigate(['']);
            return false;
        }
    }

    async canActivateChild(route: ActivatedRouteSnapshot) {
        const routeRoles = route.data.roles as Array<string>;
        let userRole = this.store.selectSnapshot(UserState.getRole);
        if (userRole !== undefined) {return this.checkRole(routeRoles, userRole);}

        await this.store.dispatch(new GetUser()).toPromise();
        userRole = this.store.selectSnapshot(UserState.getRole);
        return this.checkRole(routeRoles, userRole);
    };
}
