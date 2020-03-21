import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NgwWowModule } from 'ngx-wow';
import { HomeFormationDirective } from './home-formation.directive';
import { PreloaderComponent } from './preloader/preloader.component';
import { FooterComponent } from './footer/footer.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HackmeComponent } from './hackme/hackme.component';
import { HackzoneComponent } from './hackzone/hackzone.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HomeFormationDirective,
    PreloaderComponent,
    FooterComponent,
    PresentationComponent,
    HackmeComponent,
    HackzoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
