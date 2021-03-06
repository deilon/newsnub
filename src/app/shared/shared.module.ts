import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
    declarations: [
        ArticlesComponent,
        PaginationComponent
    ], 
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        ArticlesComponent,
        PaginationComponent
    ]
})
export class SharedModule { }