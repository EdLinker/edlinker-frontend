import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { filter, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-shared-breadcrumbs',
  templateUrl: './shared-breadcrumbs.component.html',
  styleUrls: ['./shared-breadcrumbs.component.css']
})
export class SharedBreadcrumbsComponent implements OnInit {

  static readonly routeDataBreadCrumb = 'breadcrumb';
  home: MenuItem = { icon: 'pi pi-home', url: '/' };
  menuItems!: MenuItem[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd),
      startWith(undefined))
      .subscribe(() => this.menuItems = this.createBreadcrumbs(this.activatedRoute.root));
  }

  isNullOrUndefined(value: any) {
    return value === null || value === undefined;
  }

  createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: MenuItem[] = []): any {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data[SharedBreadcrumbsComponent.routeDataBreadCrumb];
      if (!this.isNullOrUndefined(label)) {
        breadcrumbs.push({ label, url });
      }


      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
