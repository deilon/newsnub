import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesCategoryService {

    a2cChanged = new Subject();
    constructor() { }

}
