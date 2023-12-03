import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingMonserratComponent } from './pages/landing-monserrat/landing-monserrat.component';

const routes: Routes = [
  {path: "monserratbyalejandra", component: LandingMonserratComponent},
  {path: "", redirectTo: "/monserratbyalejandra", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
