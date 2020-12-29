import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SpaceXService } from '../../services/spacex.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  constructor(
    private spaceXService: SpaceXService,
  ) { }

  crew: any[] = [];
  loading: boolean = true;
  error: boolean = false;

  getCrew() {
    this.spaceXService.get('cr3w').subscribe(
      (response: any[]) => {
        console.log(response);
        this.crew = response;
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 404) {
          // Do something specific to the 404 error
        }

        if (error.status === 403) {
          // Do something specific to the 403 error
        }

        this.loading = false;
        this.error = true;
      }
    );
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getCrew();
    }, 800);
  }

}
