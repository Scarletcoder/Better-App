import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataService } from './Shared/dataService';
import { LeagueService } from './Shared/leagueService';
import { Matches } from './Matches/Matches.component';
import { MatchList } from './Matches/MatchList.component';
import { Leagues } from './Leagues/Leagues.component';
import { Cart } from "./Matches/cart.component";

let routes = [
    { path: '', component: Leagues },
    { path: 'Matches/:id', component: Matches }
];

@NgModule({
  declarations: [
      AppComponent,
      MatchList,
      Matches,
      Leagues,
      Cart
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule
          .forRoot(routes,
          {
          useHash: true,
          enableTracing: false // for Debugging of the Routes
          }
      )
  ],
    providers: [
        DataService,
        LeagueService
    ],
    bootstrap: [AppComponent],

})
export class AppModule { }
