import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesCategoryService {

    countryCodeChanged = new Subject();
    constructor() { }

}
