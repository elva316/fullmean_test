import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
// import { DisplayComponent } from  './display/display.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: DisplayComponent },
  // { path: '**', component: DisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
