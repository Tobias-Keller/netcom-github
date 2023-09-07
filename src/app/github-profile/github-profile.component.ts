import {Component, Input} from '@angular/core';
import {Profile} from "../models/profile";
import {Repro} from "../models/repro";

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.less']
})
export class GithubProfileComponent {
  @Input() profile: Profile | undefined;
  @Input() repositories: Repro[] | undefined;
}
