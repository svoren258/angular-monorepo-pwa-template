import { ApplicationConfig, isDevMode, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideServiceWorker } from '@angular/service-worker';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideRouter(appRoutes), provideAnimations(), provideServiceWorker('ngsw-worker.js', {
    enabled: !isDevMode(),
    registrationStrategy: 'registerWhenStable:30000'
  }), importProvidersFrom(provideFirebaseApp(() => initializeApp({
    'projectId': 'my-pwa-template-5d4be',
    'appId': '1:786589693451:web:087a0dd2d9a54f1ba0390e',
    'storageBucket': 'my-pwa-template-5d4be.appspot.com',
    'apiKey': 'AIzaSyAdwwef-LD1fThx-ylzpsFt3nZzwR3ZH98',
    'authDomain': 'my-pwa-template-5d4be.firebaseapp.com',
    'messagingSenderId': '786589693451',
    'measurementId': 'G-K4KK3R1ZKC'
  }))), importProvidersFrom(provideFirestore(() => getFirestore()))],
};
