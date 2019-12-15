import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../Shared/leagueService';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'Bettor-App',
    templateUrl: 'Leagues.component.html',
})
export class Leagues implements OnInit{
    title = 'Leagues';

    constructor(private data: LeagueService, private route: ActivatedRoute) { }

    public leagues = [];

    ngOnInit(): void {
        this.data.loadLeagues()
            .subscribe(success => {
                if (success) {
                    this.leagues = this.data.leagues;
                }
            });
    }
}
