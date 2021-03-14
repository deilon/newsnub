import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [
        ArticlesComponent,
        PaginationComponent
    ], 
    imports: [
        CommonModule,
        NgxPaginationModule
    ],
    exports: [
        CommonModule,
        NgxPaginationModule,
        ArticlesComponent,
        PaginationComponent
    ]
})
export class SharedModule { }