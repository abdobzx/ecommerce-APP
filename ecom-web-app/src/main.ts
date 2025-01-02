import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()), // Enable fetch for HttpClient
    importProvidersFrom(HttpClientModule), // Import HttpClientModule here
    NgForOf, NgIf // Register other directives
  ]
})
  .catch((err) => console.error(err));
