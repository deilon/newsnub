import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// Components
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { ArticlesSourceComponent } from './articles-source/articles-source.component';
import { ArticlesCategoryComponent } from './articles-category/articles-category.component';
import { ArticlesSearchComponent } from './articles-search/articles-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsDialogComponent,
    ArticlesSourceComponent,
    ArticlesCategoryComponent,
    ArticlesSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SettingsDialogComponent]
})
export class AppModule { }
