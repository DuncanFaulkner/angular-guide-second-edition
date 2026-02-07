import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // withPreloading(PreloadAllModules)
      // withPreloading(NoPreloading)
      // withPreloading(CustomPreloadingStrategy)
      // withPreloading(NetworkAwarePreloadingStrategy)
      withComponentInputBinding()
    ),
  ],
};
