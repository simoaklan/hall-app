import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HallComponent } from './hall/hall.component';
const routes: Routes = [
  { path: '', component:AppComponent },
  { path: 'hall', component: HallComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
