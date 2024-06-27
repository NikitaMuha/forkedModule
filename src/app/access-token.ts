import { Router, Route, CanLoad, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccessToken implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    const accessToken = credentials?.token;

    if (accessToken) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
