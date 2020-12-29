import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  constructor(
    private http: HttpClient,
  ) { }

  // Reflect the usage of a get request for the different SpaceX endpoints
  get(endpoint: string, version: string = 'v4') {
    return this.http.get(`https://api.spacexdata.com/${version}/${endpoint}`);
  }

  // The way you set up your functions is up to you.
  // getDragons() {
  //   return this.http.get(`https://api.spacexdata.com/v4/dragons`)
  // }

  // getCrew() {
  //   return this.http.get(`https://api.spacexdata.com/v4/crew`)
  // }

  // getCompany() {
  //   return this.http.get(`https://api.spacexdata.com/v4/company`)
  // }

}
