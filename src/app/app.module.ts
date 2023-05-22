import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './vistas/componentes/navbar/navbar.component';
import { CardComponent } from './vistas/componentes/card/card.component';
import { FooterComponent } from './vistas/componentes/footer/footer.component';
import { FotoslondresComponent } from './vistas/fotoslondres/fotoslondres.component';
import { ParallaxComponent } from './vistas/parallax/parallax.component';

//Material

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    FotoslondresComponent,
    ParallaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
