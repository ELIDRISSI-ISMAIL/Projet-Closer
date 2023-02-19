import { Injectable } from '@angular/core';

import {Observable} from "rxjs";
import {HttpClient, HttpHeaders,} from '@angular/common/http';
import {RequestPost} from "../models/RequestPost";


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private source: string = "localhost";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http : HttpClient) {
  }
  public postRequest(request: RequestPost): Observable<RequestPost> {

    const body = JSON.stringify(request);
    console.log("this is the body"+body);
    return this.http.post<RequestPost>("http://"+this.source+":9999/adherents/add", body,{headers : {
      }})
      ;
  }
}
export class PositionPost {
  latitude!: number
  longitude!: number

  constructor() {
    this.latitude = 1;
    this.longitude = 1;
  }
}


