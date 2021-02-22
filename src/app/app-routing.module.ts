import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ArticlesCategoryComponent } from './articles-category/articles-category.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'articles/general', pathMatch: 'full' },
    { path: 'articles/:category', component: ArticlesCategoryComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})

export class AppRoutingModule {

}