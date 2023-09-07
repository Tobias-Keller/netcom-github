export class Repro {
  name: string;
  full_name: string;
  created_at: string;
  description: string;
  html_url: string;

  constructor(repro: any) {
    {
      this.name = repro.name;
      this.full_name = repro.full_name;
      this.created_at = repro.created_at;
      this.description = repro.description;
      this.html_url = repro.html_url;
    }
  }
}
