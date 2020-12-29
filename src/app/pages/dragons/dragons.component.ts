import { Component, OnInit } from '@angular/core';

import { SpaceXService } from '../../services/spacex.service';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})
export class DragonsComponent implements OnInit {

  constructor(
    private spaceXService: SpaceXService,
  ) { }

  // Create the dragon data property
  // The reason we use any, is because the data object is fairly complex
  // it'll take time to create the interface. But if you have the time, create the interface
  // any is just a short and easy way for generalized typing when you don't have the interface / type
  dragons: any[] = [];

  ngOnInit(): void {
    this.spaceXService.get('dragons', 'v4').subscribe((response: any[]) => {
      console.log(response);
      // Bind the response to a property in the class so it can be used in the template
      this.dragons = response;
    });
  }
}
