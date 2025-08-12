import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { NasaApodService } from 'src/app/services/nasa-apod.service';

@Component({
  selector: 'app-nasa-apod',
  templateUrl: './nasa-apod.component.html',
  styleUrls: ['./nasa-apod.component.css']
})
export class NasaApodComponent implements OnInit {
  apod: any = null;
  loading = false;
  error: string | null = null;
  apods: any[] = [];
  gokuImagePath = './assets/goku.png';

  constructor(private apodService: NasaApodService, private loader: LoaderService) {}

  ngOnInit() {
  }

  fetchApod(date?: string) {
    this.loader.show();
    this.error = null;
    this.apodService.getApod(date).subscribe({
      next: (data) => {
        this.loader.hide();
        this.apod = data;
      },
      error: (err) => {
        this.loader.hide();
        this.error = 'Failed to load APOD.';
      }
    });
  }

  fetchApodsByDateRange(startDate: string, endDate: string) {
    if (!startDate || !endDate) {
      this.error = `Heh, you gotta power up with both the start date and the end date! Can't unleash the full potential without 'em!`;
      return;
    }
    this.loader.show();
    this.error = null;
    this.apodService.getApodsByDateRange(startDate, endDate).subscribe({
      next: (data) => {
        this.apods = data;
        this.loader.hide();
      },
      error: (err) => {
        this.error = 'Failed to load APODs for the selected range.';
        this.loader.hide();
      }
    });
  }
}
