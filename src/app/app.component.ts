import { Component, OnInit } from '@angular/core';
import { FactsAboutNumbersService } from './core/facts-about-numbers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  numberFact: string = '';
  specificNumber: string = '';
  factForSpecificNumber: string = '';

  constructor(private factsAboutNumbersService: FactsAboutNumbersService) {}

  ngOnInit(): string {
    return this.factsAboutNumbersService
      .getRandomNumberFacts()
      .subscribe((fact: string) => {
        this.numberFact = fact;
        console.log(fact);
      });
  }

  getSpecificNumberFacts(number: string) {
    return this.factsAboutNumbersService
      .getSpecificNumberFacts(number)
      .subscribe((fact: string) => {
        this.factForSpecificNumber = fact;
        console.log(fact);
      });
  }
}
