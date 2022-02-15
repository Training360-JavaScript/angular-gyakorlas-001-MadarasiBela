import { Component, OnInit } from '@angular/core';

interface IPriceItem {
  name: string;
  price: number;
  options: string[];
  btnText: string;
}

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {

  priceTable: IPriceItem[] = [];

  constructor() {
   }

  ngOnInit(): void {
    this.priceTable = [
      {
        name: 'Free',
        price: 0,
        options: ['10 Tanulo','2 GB Tárhely','Email támogatás','Dokumentáció'],
        btnText: 'Ingyyenes regisztráció',
      },

       ]
    }

}
