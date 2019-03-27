import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title.component';
import { HeaderComponent } from './components/header.component';
import { BodyComponent } from './components/body.component';
import { MaincontentComponent } from './components/mainconent.component';
import { LeftsideComponent } from './components/leftside.component';
import { RightsideComponent } from './components/rightside.component';
import { FooterComponent } from './components/footer.component';
import { SlideComponent } from './components/slide.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HeaderComponent,
    SlideComponent,
    BodyComponent,
    MaincontentComponent,
    LeftsideComponent,
    RightsideComponent,
    FooterComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
