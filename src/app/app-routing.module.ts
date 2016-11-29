import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShortDetailComponent} from './main-page/short-detail/short-detail.component';
import {EmptyComponent} from './main-page/empty/empty.component';
import {UploadFormComponent}  from './main-page/upload-form/upload-form.component'

const routes: Routes = [
  {path: '', component: EmptyComponent},
  {path: 'short/:short', component: ShortDetailComponent},
  {path: 'new-item/:short', component: UploadFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
