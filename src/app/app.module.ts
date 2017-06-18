import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { MoviesModule } from './movies/movies.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    MoviesModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
