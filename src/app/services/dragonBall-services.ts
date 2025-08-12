import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, forkJoin, map } from "rxjs";

interface DragonBallCharacter {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt: null | string;
}

interface DragonBallApiResponse {
    items: DragonBallCharacter[];
    meta: {
        totalItems: number;
        itemCount: number;
        itemsPerPage: number;
        totalPages: number;
        currentPage: number;
    };
    links: {
        first: string;
        previous?: string;
        next?: string;
        last: string;
    };
}

@Injectable({
    providedIn: 'root',
})

export class DragonBallService {

    constructor(private readonly http: HttpClient) { }

    getDragonBallsApi(): Observable<DragonBallApiResponse> {
        const pages = [1, 2, 3, 4, 5, 6];
        
        // Create an array of HTTP requests for each page
        const requests = pages.map(page => 
            this.http.get<DragonBallApiResponse>(`https://dragonball-api.com/api/characters?page=${page}&limit=10`)
        );
        
        // Use forkJoin to execute all requests simultaneously
        return forkJoin(requests).pipe(
            map(responses => {
                // Combine all items from all pages
                const allItems: DragonBallCharacter[] = [];
                let totalItems = 0;
                let totalPages = 0;
                
                responses.forEach(response => {
                    allItems.push(...response.items);
                    totalItems = response.meta.totalItems; // Use the total from API
                    totalPages = response.meta.totalPages; // Use total pages from API
                });
                
                // Return combined response
                return {
                    items: allItems,
                    meta: {
                        totalItems: totalItems,
                        itemCount: allItems.length,
                        itemsPerPage: allItems.length, // All items in one response
                        totalPages: totalPages,
                        currentPage: 1 // Since we're combining all into one page
                    },
                    links: {
                        first: 'https://dragonball-api.com/api/characters?page=2',
                        last: 'https://dragonball-api.com/api/characters?page=6'
                    }
                } as DragonBallApiResponse;
            })
        );
    }
}
