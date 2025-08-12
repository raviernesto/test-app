import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { DragonBallService } from 'src/app/services/dragonBall-services';

@Component({
  selector: 'app-dragon-ball',
  templateUrl: './dragon-ball.component.html',
  styleUrls: ['./dragon-ball.component.css']
})
export class DragonBallComponent implements OnInit, AfterViewInit {
  private intersectionObserver?: IntersectionObserver;

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
    // Cleanup existing observer
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }

    // Check if device supports touch (mobile/tablet)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isTouchDevice) {
      console.log('Desktop device detected, skipping mobile scroll observer');
      return; // Skip mobile effects on desktop
    }

    const options = {
      root: null,
      rootMargin: '-10% 0px -10% 0px', // More precise triggering
      threshold: [0.1, 0.5, 0.9] // Multiple thresholds for better responsiveness
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const card = entry.target as HTMLElement;
        
        if (entry.isIntersecting) {
          // Add mobile-hover class when card comes into view with a slight delay for better effect
          setTimeout(() => {
            card.classList.add('mobile-hover');
            console.log('Mobile device: Card entered view, added mobile-hover class');
          }, 150);
        } else {
          // Remove mobile-hover class when card goes out of view
          card.classList.remove('mobile-hover');
          console.log('Mobile device: Card left view, removed mobile-hover class');
        }
      });
    }, options);

    // Observe all character cards
    const cards = this.elementRef.nativeElement.querySelectorAll('.character-card');
    console.log(`Touch device detected. Found ${cards.length} cards to observe`);
    
    if (cards.length > 0) {
      cards.forEach((card: Element) => this.intersectionObserver!.observe(card));
      console.log('Mobile scroll observer set up successfully for touch device');
    } else {
      console.warn('No character cards found for mobile scroll observer');
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
