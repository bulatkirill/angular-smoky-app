import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Configuration} from '../../configuration/WebApiConfiguration';

@Injectable()
export class ReservationApiService {

  private actionUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.actionUrl = configuration.serverWithApiUrl + 'reservations/';
  }

  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl);
  }

  public getSingle<T>(id: number): Observable<T> {
    return this.http.get<T>(this.actionUrl + id);
  }

  public add<T>(itemName: string): Observable<T> {
    const toAdd = {ItemName: itemName};

    return this.http.post<T>(this.actionUrl, toAdd);
  }

  public update<T>(id: number, itemToUpdate: any): Observable<T> {
    return this.http
      .put<T>(this.actionUrl + id, itemToUpdate);
  }

  public delete<T>(id: number): Observable<T> {
    return this.http.delete<T>(this.actionUrl + id);
  }
}


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
    }

    req = req.clone({headers: req.headers.set('Accept', 'application/json')});
    return next.handle(req);
  }
}
