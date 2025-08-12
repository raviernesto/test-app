import { Component, OnInit } from '@angular/core';
import { DragonBallService } from 'src/app/services/dragonBall-services';

@Component({
  selector: 'app-dragon-ball',
  templateUrl: './dragon-ball.component.html',
  styleUrls: ['./dragon-ball.component.css']
})
export class DragonBallComponent implements OnInit {
  constructor(private readonly dragonBallApiService: DragonBallService) { }
  
  dragonBalls: any[] = [];
  filteredDragonBalls: any[] = [];
  isLoading = false;
  currentPage = 1;
  totalPages = 1;
  selectedRace = '';
  availableRaces: string[] = [
    'Saiyan',
    'Namekian',
    'Human',
    'Majin',
    'Frieza Race',
    'Jiren Race',
    'Android',
    'God',
    'Angel',
    'Evil',
    'Unknown',
    'Nucleico benigno',
    'Nucleico'
  ];

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.isLoading = true;
    this.dragonBallApiService.getDragonBallsApi().subscribe({
      next: (response) => {
        this.dragonBalls = response.items;
        this.filteredDragonBalls = response.items;
        this.currentPage = response.meta.currentPage;
        this.totalPages = response.meta.totalPages;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading Dragon Ball characters:', error);
        this.isLoading = false;
      }
    });
  }

  onRaceChange(event: any) {
    this.selectedRace = event.target.value;
    this.filterCharacters();
  }

  filterCharacters() {
    if (this.selectedRace === '') {
      this.filteredDragonBalls = this.dragonBalls;
    } else {
      this.filteredDragonBalls = this.dragonBalls.filter(
        character => character.race === this.selectedRace
      );
    }
  }

  clearFilter() {
    this.selectedRace = '';
    this.filteredDragonBalls = this.dragonBalls;
  }
}
