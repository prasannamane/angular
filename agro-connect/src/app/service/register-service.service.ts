// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

     http: HttpClient = inject(HttpClient);

    getList(): Observable<any>{
      return this.http.get("http://127.0.0.1:8000/api/users-list/");
    }
}
