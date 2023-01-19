import { ControlMessageModule } from './component/control-message/control-message.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './page/index/index.component';
import { LoginComponent } from './page/login/login.component';
import { ListComponent } from './page/list/list.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    IndexComponent,
    LoginComponent,
    ListComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ControlMessageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
