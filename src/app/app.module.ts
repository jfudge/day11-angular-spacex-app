import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { DragonsComponent } from './pages/dragons/dragons.component';
import { CrewComponent } from './pages/crew/crew.component';
import { AboutComponent } from './pages/about/about.component';
import { CrewMemberComponent } from './pages/crew-member/crew-member.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DragonsComponent,
    CrewComponent,
    AboutComponent,
    CrewMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
