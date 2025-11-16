import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core-module';
import { SharedModule } from './shared/shared-module';
import { PagesModule } from './pages/pages-module';
import { CabinetModule } from './pages/cabinet/cabinet-module';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader, TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthInterceptor } from './core/interceptors/auth/auth-interceptor';
import { LoadingInterceptor } from './core/interceptors/loading/loading-interceptor';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader()
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    PagesModule,
    CabinetModule,
    AppRoutingModule,
    // RouterModule,
        ReactiveFormsModule,
    TranslateModule.forRoot(),


  ],
  providers: [

    provideTranslateHttpLoader({
      prefix: '/assets/i18n/',
      suffix: '.json',
    }),

    // provideHttpClient(),
    provideHttpClient(withInterceptorsFromDi()),
     {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
     {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
  }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ka']);
    translate.setDefaultLang('en');
  }
}
