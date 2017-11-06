import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Offer } from '../models/offer';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  public allOffers: any;
  public comingSoonOffers: Offer[];
  public liveOffers: Offer[];
  public searchResult: Offer[];
  constructor(private http: HttpClient,
              private router: Router) {}

  ngOnInit() {
    this.http.get(environment.equitiseAPI).toPromise()
      .then((data) => {
        this.allOffers = data;
        this.comingSoonOffers = this.allOffers.comingSoon;
        this.liveOffers = this.allOffers.live;
      });
  }

  searchOffers(userInput) {
    this.searchResult = this.comingSoonOffers.filter((offer)=>{
      return offer.name.indexOf(userInput) !== -1;
    });
  }

  homePage() {
    this.router.navigateByUrl('');
  }
}
