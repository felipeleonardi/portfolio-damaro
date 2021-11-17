import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './components/header/header.module';
import { CoverModule } from './components/cover/cover.module';

const components = [
  HeaderModule,
  CoverModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ...components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
