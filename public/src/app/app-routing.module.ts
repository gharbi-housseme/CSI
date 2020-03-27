import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from 'src/app/presentation/presentation.component';
import { HackmeComponent } from 'src/app/hackme/hackme.component';
import { HackzoneComponent } from 'src/app/hackzone/hackzone.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { FormationsComponent } from 'src/app/formations/formations.component';
import { SponsorsComponent } from 'src/app/sponsors/sponsors.component';
import { from } from 'rxjs';
import { HzformComponent } from './hzform/hzform.component';


const routes: Routes = [
  {path : "", component: HomeComponent},
  {path : "presentation", component: PresentationComponent},
  {path : "hackme", component: HackmeComponent},
  {path : "hackzone", component: HackzoneComponent},
  {path : "contact", component: ContactComponent},
  {path : "hzform", component: HzformComponent},
  {path : "sponsors", component: SponsorsComponent},
  {path : "formations", component: FormationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
