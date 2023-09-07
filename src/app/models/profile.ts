export class Profile {
  login: string;
  name: string;
  url: string;
  company: string;
  blog: string;
  location: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  bio: string;
  created_at: string;
  avatar_url: string;

  constructor(profile: any) {
    {
      this.login = profile.login;
      this.name = profile.name || '';
      this.url = profile.url || '';
      this.company = profile.company || '';
      this.blog = profile.blog || '';
      this.location = profile.location || '';
      this.public_repos = profile.public_repos || '0';
      this.public_gists = profile.public_gists || '0';
      this.followers = profile.followers || '0';
      this.following = profile.following || '0';
      this.bio = profile.bio || '';
      this.created_at = profile.created_at || '';
      this.avatar_url = profile.avatar_url || '';
    }
  }
}
