import { Injectable } from '@angular/core';
import {CONNECTION} from "./global";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  public uri: string;

  constructor(private http: HttpClient) {
    this.uri = CONNECTION.URI;
  }


  getLatestGT() {
    return this.http.get(this.uri + 'jhu-edu/latest?iso2=GT');
  }

}
