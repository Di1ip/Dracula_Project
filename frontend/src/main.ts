import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
export function getbaseUrl()
{
  return "http://localhost:3000/admin"
}
export function getimageUrl()
{
  return  "http://localhost:3000/public"
}
 
const providers = 
[
   {provide:'baseUrl',useFactory:getbaseUrl,deps:[]},
   {provide:'imageUrl',useFactory:getbaseUrl,deps:[]},
]
 
platformBrowserDynamic(providers).bootstrapModule(AppModule)
   .catch(err => console.error(err));
