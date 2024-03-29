import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './theme/theme.module';

// Components
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { ArticlesSourceComponent } from './articles-source/articles-source.component';
import { ArticlesCategoryComponent } from './articles-category/articles-category.component';
import { ArticlesSearchComponent } from './articles-search/articles-search.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsDialogComponent,
    ArticlesSourceComponent,
    ArticlesCategoryComponent,
    ArticlesSearchComponent,
    SidenavComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ThemeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SettingsDialogComponent]
})
export class AppModule { }
