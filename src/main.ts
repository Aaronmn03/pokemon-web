import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(App, {
  ...appConfig,
  providers: [
    importProvidersFrom(HttpClientModule) // <-- esto asegura que HttpClient esté disponible
  ]
})
.catch(err => console.error(err));