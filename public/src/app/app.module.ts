import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { Http } from '@angular/http';
import { PublicService } from './public.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmitComponent } from './submit/submit.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [PublicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
