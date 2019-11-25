import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'diamsyah-key': 'd1D4_Mu5t0F4-D14m5Y4H'})
};
const apiUrl = 'http://diamsyah.com/service/';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient
  ) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  convertToQueryParams(obj) {
    var str = "";
    for (var key in obj) {
        if (str != "") {
            str += "&";
        }
        str += key + "=" + encodeURIComponent(obj[key]);
    }

    return str;
  }

  getData(param): Observable<any> {
    return this.http.get(apiUrl + param, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  postData(param, data): Observable<any> {
    let req = this.convertToQueryParams(data);
    return this.http.post(apiUrl + param, req, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
}
