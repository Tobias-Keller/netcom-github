import {Component, OnInit} from '@angular/core';
import {GithubService} from "./_services/github.service";
import {first} from "rxjs";
import {Profile} from "./models/profile";
import {Repro} from "./models/repro";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent{
  statusMessage: string = "";
  isError: boolean = false;
  profile: Profile | undefined;
  repositories: Repro[] | undefined;
  isLoading = false;


  constructor(
    private githubService: GithubService
  ) {}

  handleSearch(searchString: string) {
    this.isLoading = true;
    this.githubService.getProfile(searchString)
      .pipe(first())
      .subscribe({
        next: (data) => {
          this.isError = false;
          this.statusMessage = "Profil für \"" + searchString + "\" gefunden";
          this.profile = new Profile(data);

          this.githubService.getRepos(this.profile.login)
            .pipe(first())
            .subscribe({
              next: (data) => {
                this.repositories = [];
                for (const repro of data) {
                  this.repositories.push(new Repro(repro));
                }
                this.isLoading = false;
              },
              error: error => {
                this.isError = true;
                this.statusMessage = "Fehler bei der Abfrage der Repositories.";
                this.isLoading = false;
              }
            })
        },
        error: error => {
          this.isError = true;
          this.statusMessage = "Profil nicht gefunden.";
          this.isLoading = false;
        }
      })
  }
}
