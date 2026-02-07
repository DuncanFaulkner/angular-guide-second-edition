import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data?.['preload'] ? fn() : of(null);
  }
}

@Injectable({ providedIn: 'root' })
export class NetworkAwarePreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (!route.data?.['preload']) {
      return of(null);
    }
    const connection = (navigator as any).connection;
    if (!connection) {
      return fn();
    }
    const effectiveType = connection.effectiveType; // 4g, 5g, 2g, slow
    const saveData = connection.saveData;

    if (saveData) {
      return of(null);
    }
    if (effectiveType === '4g' || effectiveType === '3g') {
      return fn();
    }
    return of(null);
  }
}
