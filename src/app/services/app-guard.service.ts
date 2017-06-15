import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class AppDetailGuard {
  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // console.log(route.url[1].path);
    let name = route.url[1].path; // removed '+' prefix
    if (name === "") {
      // start a new navigation to redirect to list page
      this._router.navigate(['/my-app']);
      // abort current navigation
      return false;
    };
    return true;
  }
}
