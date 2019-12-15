import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class LeagueService {
    constructor(private http: HttpClient) { }
    public leagues = [];
    loadLeagues(/*id: string*/) {
        return this.http.get('/api/League'/*+ id*/)
            .pipe(
                map((data: any[]) => {
                    this.leagues = data;
                return true;
            }));
    }
}

