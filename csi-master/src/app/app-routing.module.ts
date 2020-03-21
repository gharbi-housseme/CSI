import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from 'src/app/presentation/presentation.component';
import { HackmeComponent } from 'src/app/hackme/hackme.component';
import { HackzoneComponent } from 'src/app/hackzone/hackzone.component';


const routes: Routes = [
  {path : "", component: HomeComponent},
  {path : "presentation", component: PresentationComponent},
  {path : "hackme", component: HackmeComponent},
  {path : "hackzone", component: HackzoneComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
