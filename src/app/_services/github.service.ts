import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../models/profile";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  baseUrl: string = "https://api.github.com/users";

  constructor(
    private http: HttpClient
  ) { }

  getProfile(profileName: string) {
    return this.http.get<any[]>(`${this.baseUrl}/${profileName}`);
  }

  getRepos(profileName: string) {
    return this.http.get<any[]>(`${this.baseUrl}/${profileName}/repos`);
  }
}
