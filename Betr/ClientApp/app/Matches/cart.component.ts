﻿import { Component } from "@angular/core";
import { DataService } from "../Shared/dataService";

@Component({
    selector: "the-cart",
    templateUrl: "cart.component.html",
    styleUrls: ["cart.component.css"]
})

export class Cart {
    constructor(private data: DataService) { }
}