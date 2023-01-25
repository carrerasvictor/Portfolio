import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './shared/about/about.component';
import { SkillsComponent } from './shared/skills/skills.component';
import { ProjectsComponent } from './shared/projects/projects.component';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    MenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
