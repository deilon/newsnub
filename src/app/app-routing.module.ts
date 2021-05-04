import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ArticlesCategoryComponent } from './articles-category/articles-category.component';
import { ArticlesSearchComponent } from './articles-search/articles-search.component';
import { ArticlesSourceComponent } from './articles-source/articles-source.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'articles/category/general', pathMatch: 'full' },
    { path: 'articles/category/:category', component: ArticlesCategoryComponent },
    { path: 'articles/source/:source', component: ArticlesSourceComponent },
    { path: 'articles/search/:query', component: ArticlesSearchComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})

export class AppRoutingModule {

}