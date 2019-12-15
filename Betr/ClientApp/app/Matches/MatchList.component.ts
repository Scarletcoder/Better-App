import { Component, OnInit } from '@angular/core';
import { DataService } from '../Shared/dataService';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'ClientApp/app/app.component';
import { Match } from '../shared/match' 

    
@Component({
  selector: 'Match-List',
  templateUrl: 'MatchList.component.html',
  styleUrls: ['MatchList.component.css']
})
export class MatchList implements OnInit {
    constructor(private data: DataService, private route: ActivatedRoute) {
        this.id = route.snapshot.params['id']
    }
    id: string;
    public matches = [];
    ngOnInit(): void {
        this.data.loadMatches(this.id)
            .subscribe(success => {
                if (success) {
                    this.matches = this.data.matches;
                }
            });
    }
    addBet(match: Match, chanceType: number) {
        this.data.AddToOrder(match, chanceType);
    }
}