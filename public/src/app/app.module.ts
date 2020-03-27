import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
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
import { HackzoneComponent } from './hackzone/hackzone.component';
import { HzformComponent } from './hzform/hzform.component';
import { ContactComponent } from './contact/contact.component';
import { FormationsComponent } from 'src/app/formations/formations.component';
import { SponsorsComponent } from 'src/app/sponsors/sponsors.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { environment } from '../environments/environment';
import { DatabaseService } from './services/database.service';



 

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
    SponsorsComponent,
    HackzoneComponent,
    HzformComponent,
    FormationsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFontAwesomeModule,
    HttpClientModule
   
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

