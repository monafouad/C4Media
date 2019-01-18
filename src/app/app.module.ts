import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { CareerComponent } from './pages/career/career.component';
import { FooterComponent } from './shared/footer/footer.component';

import { VideoComponent } from './components/video/video.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { ReasonsComponent } from './components/reasons/reasons.component';
import { FrameComponent } from './components/frame/frame.component';
import { SafePipe } from './components/frame/safe.pipe';

import {AppRouters} from './app.routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareerComponent,
    VideoComponent,
    AboutComponent,
    FrameComponent,
    SafePipe,
    TeamComponent,
    ReasonsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRouters,
    HttpClientModule,
   
  ],
  exports: [

  ],
  providers: [
  ],  bootstrap: [AppComponent]
})
export class AppModule { }



