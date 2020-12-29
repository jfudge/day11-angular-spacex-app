import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpaceXService } from '../../services/spacex.service';

@Component({
  selector: 'app-crew-member',
  templateUrl: './crew-member.component.html',
  styleUrls: ['./crew-member.component.css']
})
export class CrewMemberComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private spaceXService: SpaceXService,
  ) { }

  // This property is undefined until the API is successfully retrieved
  crewMember: any; // This is an object (we don't have the interface yet)

  ngOnInit(): void {
    // First we need the crew member id from the route (:id)
    // In our case :id is a param
    this.activatedRoute.params.subscribe(params => {
      // console.log(params);
      const { id } = params;
      console.log(id);

      // After we get the id, we need to make the API call
      this.spaceXService.get(`crew/${id}`).subscribe((response: any) => {
        console.log(response);
        this.crewMember = response;
      });

    });
  }

}
