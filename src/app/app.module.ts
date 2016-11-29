import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import {ShortDetailComponent} from './main-page/short-detail/short-detail.component';
import {EmptyComponent} from './main-page/empty/empty.component';
import { PublishItemComponent } from './main-page/short-detail/publish-item/publish-item.component';
import { UploadFormComponent } from './main-page/upload-form/upload-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainPageComponent,
    ShortDetailComponent,
    EmptyComponent,
    PublishItemComponent,
    UploadFormComponent
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
