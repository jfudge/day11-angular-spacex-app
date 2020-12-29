import { Component, OnInit } from '@angular/core';

import { SpaceXService } from '../../services/spacex.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private spaceXService: SpaceXService,
  ) { }

  // Default undefined
  company: any;
  loading: boolean = true;

  // Make a function that is meant to load the company information.
  getCompanyInfo() {
    this.spaceXService.get('company', 'v4').subscribe((response: any) => {
      console.log(response);
      this.company = response;

      // Turn loading off (set it to false) when we have the data
      this.loading = false;
    });
  }

  ngOnInit(): void {
    // Let's fake a longer load time. This will emulate slow internet connections
    setTimeout(() => {
      this.getCompanyInfo();
    }, 800);
  }

}
