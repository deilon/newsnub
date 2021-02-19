import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'articles/general', pathMatch: 'full' },
    { path: 'articles/:category', component: ArticlesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})

export class AppRoutingModule {

}