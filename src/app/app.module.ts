import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentProjectionComponent,
    NgTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents:[
  ]
})
export class AppModule { }
