import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { NasaNeoService } from 'src/app/services/nasa-neo.service';

@Component({
  selector: 'app-nasa-neo',
  templateUrl: './nasa-neo.component.html',
  styleUrls: ['./nasa-neo.component.css'],
})
export class NasaNeoComponent implements OnInit {
  asteroids: any[] = [];

  constructor(
    private loader: LoaderService,
    private nasaNeoService: NasaNeoService
  ) {}

  ngOnInit() {
    this.loader.show();
    // this.nasaNeoService.browseAsteroids().subscribe(data => {
    const data = this.nasaNeoService.getAsteroidDetails();
    console.log(data);
    this.loader.hide();
    this.asteroids = data.near_earth_objects || [];
    // });
  }
  navToNasaPage(data?: any) {
    const url = data.nasa_jpl_url;
    if (url) {
      window.open(url, '_blank');
    } else {
      console.warn('No NASA JPL URL available for this asteroid.');
    }

  }
}
