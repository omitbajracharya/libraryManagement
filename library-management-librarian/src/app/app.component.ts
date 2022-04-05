import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library-management';

  constructor(private translate: TranslateService){
    translate.setDefaultLang('english');
  }

  changeLocale(locale: string){
    this.translate.use(locale);
  }
}
