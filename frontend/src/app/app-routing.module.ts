import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ServicesComponent } from './layout/services/services.component';
import { AboutComponent } from './layout/about/about.component';
import { HawdoweworkComponent } from './layout/hawdowework/hawdowework.component';
import { BranchesComponent } from './layout/branches/branches.component';
import { VisionComponent } from './layout/vision/vision.component';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "services", component : ServicesComponent},
  {path : "about", component : AboutComponent},
  {path : "vision", component : VisionComponent},
  {path : "hawdowewerke",component:HawdoweworkComponent},
  {path : "branches",component:BranchesComponent},
  {path : "**", redirectTo : ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
