import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';


bootstrapApplication(App, {
  ...appConfig,
  providers: [
    importProvidersFrom(HttpClientModule), // <-- esto asegura que HttpClient esté disponible,
    provideRouter(routes)
  ]
})
.catch(err => console.error(err));