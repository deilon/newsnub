import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ArticlesCategoryService } from '../articles-category/articles-category.service';
import { NewsApiService } from '../news-api.service';
import { ThemesService } from '../themes/themes.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsDialogComponent implements OnInit {

  sources: Array<any>;
  countryList: any = [
    { alpha2code: 'ae', name: 'United Arab Emirates'  },
    { alpha2code: 'ar', name: 'Argentina'  },
    { alpha2code: 'at', name: 'Austria'  },
    { alpha2code: 'au', name: 'Australia'  },
    { alpha2code: 'be', name: 'Belgium'  },
    { alpha2code: 'bg', name: 'Bulgaria'  },
    { alpha2code: 'br', name: 'Brazil'  },
    { alpha2code: 'ca', name: 'Canada'  },
    { alpha2code: 'ch', name: 'Switzerland'  },
    { alpha2code: 'cn', name: 'China'  },
    { alpha2code: 'co', name: 'Colombia'  },
    { alpha2code: 'cz', name: 'Czech Republic '  },
    { alpha2code: 'de', name: 'Germany'  },
    { alpha2code: 'eg', name: 'Egypt'  },
    { alpha2code: 'fr', name: 'France'  },
    { alpha2code: 'gb', name: 'United Kingdom'  },
    { alpha2code: 'gr', name: 'Greece'  },
    { alpha2code: 'hk', name: 'Hong Kong'  },
    { alpha2code: 'hu', name: 'Hungary'  },
    { alpha2code: 'id', name: 'Indonesia'  },
    { alpha2code: 'ie', name: 'Ireland'  },
    { alpha2code: 'il', name: 'Israel'  },
    { alpha2code: 'in', name: 'India'  },
    { alpha2code: 'it', name: 'Italy'  },
    { alpha2code: 'jp', name: 'Japan'  },
    { alpha2code: 'kr', name: 'Korea'  },
    { alpha2code: 'lt', name: 'Lithuania'  },
    { alpha2code: 'lv', name: 'Latvia'  },
    { alpha2code: 'ma', name: 'Morocco'  },
    { alpha2code: 'mx', name: 'Mexico'  },
    { alpha2code: 'my', name: 'Malaysia'  },
    { alpha2code: 'ng', name: 'Nigeria'  },
    { alpha2code: 'nl', name: 'Netherlands'  },
    { alpha2code: 'no', name: 'Norway'  },
    { alpha2code: 'nz', name: 'New Zealand'  },
    { alpha2code: 'ph', name: 'Philippines'  },
    { alpha2code: 'pl', name: 'Poland'  },
    { alpha2code: 'pt', name: 'Portugal'  },
    { alpha2code: 'ro', name: 'Romania'  },
    { alpha2code: 'rs', name: 'Serbia'  },
    { alpha2code: 'ru', name: 'Russia'  },
    { alpha2code: 'sa', name: 'Saudi Arabia'  },
    { alpha2code: 'se', name: 'Sweden'  },
    { alpha2code: 'sg', name: 'Singapore'  },
    { alpha2code: 'si', name: 'Slovania'  },
    { alpha2code: 'sk', name: 'Slovakia'  },
    { alpha2code: 'th', name: 'Thailand'  },
    { alpha2code: 'tr', name: 'Turkey'  },
    { alpha2code: 'tw', name: 'Taiwan'  },
    { alpha2code: 'ua', name: 'Ukraine'  },
    { alpha2code: 'us', name: 'United States'  },
    { alpha2code: 've', name: 'Venezuela'  },
    { alpha2code: 'za', name: 'South Africa'  },
  ];

  constructor(
    private newsapi: NewsApiService, 
    private articlesCategoryService: ArticlesCategoryService,
    public dialogRef: MatDialogRef<SettingsDialogComponent>,
    private themesService: ThemesService) { }

  ngOnInit() {
		//load news sources
		this.newsapi.initSources().subscribe(data=> this.sources = data['sources']);	
  }

  closeOnSourceClick() {
    this.dialogRef.close();
  }

  activateCountry(alpha2code: string) {
    this.articlesCategoryService.countryCodeChanged.next(alpha2code);
    localStorage.setItem('countryCode', alpha2code);
    this.dialogRef.close();
  }

  toggleTheme(theme: string) {
    if (theme == 'light') {
      this.themesService.setLightTheme();
    } else if (theme == 'dark') {
      this.themesService.setDarkTheme();
    }
  }

}
