import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
    declarations: [
        ArticlesComponent
    ], 
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        ArticlesComponent
    ]
})
export class SharedModule { }