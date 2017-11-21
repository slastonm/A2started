 /**
 * Created by Makc on 11/19/2017.
 */
 import  {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

 import {AppModule} from "./app.module";

 const platform = platformBrowserDynamic();

 platform.bootstrapModule(AppModule);
