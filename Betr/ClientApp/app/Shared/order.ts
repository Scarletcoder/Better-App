import * as _ from "lodash";

export class Order {
    orderId: number;
    orderDate: Date = new Date();
    orderNumber: string;
    items: Array<OrderItem> = new Array<OrderItem>();

    get subtotal(): number {
        return _.sum(_.map(this.items, i => i.chance * i.stake));
    };
}

export class OrderItem {
    id: number;
    stake: number;
    chance: number;
    chanceType: number;
    matchId: number;
    teamName: string;
    matchTeams: string;
}



