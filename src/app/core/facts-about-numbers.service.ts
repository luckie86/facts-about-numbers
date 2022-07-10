import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrls } from '../common/api-urls';

@Injectable({
  providedIn: 'root',
})
export class FactsAboutNumbersService {
  constructor(private httpClient: HttpClient) {}

  getRandomNumberFacts(): any {
    return this.httpClient.get(ApiUrls.FactsAboutRandomNumberApiUrl, {
      responseType: 'text',
    });
  }

  getSpecificNumberFacts(number: string) {
    return this.httpClient.get(
      `${ApiUrls.FactsAboutSelectedNumberApiUrl}${number}/trivia`,
      { responseType: 'text' }
    );
  }
}
