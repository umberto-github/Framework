import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { MenuComponent } from './menu/menu.component';
import { MenuBoxLeftComponent } from './menu-box-left/menu-box-left.component';
import { MenuBoxRightComponent } from './menu-box-right/menu-box-right.component';
import { PopupsComponent } from './popups/popups.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatasharingService } from './services/datasharing.service';
import { SessionService } from './services/session.service';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    MenuComponent,
    MenuBoxLeftComponent,
    MenuBoxRightComponent,
    PopupsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Importa il modulo HttpClientModule
    FormsModule
  ],
  providers: [DatasharingService,SessionService],
  bootstrap: [AppComponent, MenuBoxLeftComponent, PopupsComponent]
})
export class AppModule { }
