import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './components/header/header.module';
import { CoverModule } from './components/cover/cover.module';
import { AboutModule } from './sections/about/about.module';
import { HistoricModule } from './sections/historic/historic.module';
import { SkillsModule } from './sections/skills/skills.module';
import { EducationModule } from './sections/education/education.module';

const components = [
  HeaderModule,
  CoverModule,
  AboutModule,
  HistoricModule,
  SkillsModule,
  EducationModule
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
