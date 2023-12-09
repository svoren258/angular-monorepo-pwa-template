import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// TODO: fix SSR by replacing appConfig with config
const bootstrap = () => bootstrapApplication(AppComponent, appConfig);

export default bootstrap;
