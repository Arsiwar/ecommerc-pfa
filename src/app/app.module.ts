import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { FeaturesComponent } from './common/features/features.component';
import { FeaturesDetailsComponent } from './common/features-details/features-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatBadgeModule } from '@angular/material/badge';
import { FormComponent } from './common/form/form.component';
import { HomeComponent } from './common/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    FeaturesComponent,
    FeaturesDetailsComponent,
    FormComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatBadgeModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
