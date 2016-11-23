import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import {ShortDetailComponent} from './short-detail/short-detail.component';
import {EmptyComponent} from './empty/empty.component';
import { PublishItemComponent } from './short-detail/publish-item/publish-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainPageComponent,
    ShortDetailComponent,
    EmptyComponent,
    PublishItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
