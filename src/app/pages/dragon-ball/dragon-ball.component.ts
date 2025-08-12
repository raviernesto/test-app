import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { DragonBallService } from 'src/app/services/dragonBall-services';

@Component({
  selector: 'app-dragon-ball',
  templateUrl: './dragon-ball.component.html',
  styleUrls: ['./dragon-ball.component.css']
})
export class DragonBallComponent implements OnInit, AfterViewInit {
  constructor(
    private readonly dragonBallApiService: DragonBallService,
    private elementRef: ElementRef
  ) { }
  
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

  ngAfterViewInit() {
    // Scroll observer will be set up after data loads in loadCharacters()
  }

  setupScrollObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // Trigger when 30% of the card is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add mobile-hover class when card comes into view
          entry.target.classList.add('mobile-hover');
          console.log('Card entered view, added mobile-hover class'); // Debug log
        } else {
          // Remove mobile-hover class when card goes out of view
          entry.target.classList.remove('mobile-hover');
          console.log('Card left view, removed mobile-hover class'); // Debug log
        }
      });
    }, options);

    // Observe all character cards
    const cards = this.elementRef.nativeElement.querySelectorAll('.character-card');
    console.log(`Found ${cards.length} cards to observe`); // Debug log
    
    if (cards.length > 0) {
      cards.forEach((card: Element) => observer.observe(card));
      console.log('Scroll observer set up successfully'); // Debug log
    } else {
      console.warn('No character cards found for scroll observer');
    }
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
        
        // Set up scroll observer after data is loaded and rendered
        setTimeout(() => {
          this.setupScrollObserver();
        }, 200);
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
    
    // Re-setup scroll observer after filtering
    setTimeout(() => {
      this.setupScrollObserver();
    }, 100);
  }

  clearFilter() {
    this.selectedRace = '';
    this.filteredDragonBalls = this.dragonBalls;
  }
}
