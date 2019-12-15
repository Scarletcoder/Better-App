import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Match } from "./match";
import { Order, OrderItem } from "./order";
import { Matches } from '../Matches/Matches.component';


@Injectable()
export class DataService {
    constructor(private http: HttpClient) { }


    public order: Order = new Order
    public matches: Matches[] = [];

    loadMatches(id: string) {
        return this.http.get('/api/Match/'+id)
            .pipe(
                map((data: any[]) => {
                    this.matches = data;
                return true;
            }));
    }

    public checkout() {
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime().toString();
        }

        return this.http.post("/api/orders", this.order)
            .pipe(
                map(response => {
                    this.order = new Order();
                    return true;
                }));
    }


    public AddToOrder(newMatch: Match, chancType: number) {

        let item: OrderItem = this.order.items.find(i => newMatch.matchNoOfTheDay == i.matchId && i.chanceType == chancType);

        if (item)
        {
            item.stake++;
        }
        else {

            item = new OrderItem();
            if (chancType == 1) {
                item.chance = newMatch.team1Wins;
                item.chanceType = 1;
                item.teamName = newMatch.team1Name;
            }
            else if (chancType == 2) {
                item.chance = newMatch.team2Wins;
                item.chanceType = 2;
                item.teamName = newMatch.team2Name;
            }
            else if (chancType == 3) {
                item.chance = newMatch.draw;
                item.chanceType = 3;
                item.teamName = "Draw";
            }

            item.matchTeams = newMatch.team1Name +" v "+ newMatch.team2Name;
            item.stake = 1.00;
            item.matchId = newMatch.matchNoOfTheDay;

            this.order.items.push(item);

        }
    }
}





