import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShortDetailComponent} from './main-page/short-detail/short-detail.component';
import {EmptyComponent} from './main-page/empty/empty.component';
import {UploadFormComponent}  from './main-page/upload-form/upload-form.component'
import {LoginComponent} from './main-page/login/login.component';
import {LoggedInGuard} from './services/logged-in.guard'

const routes: Routes = [
  {path: '', component: EmptyComponent},
  {path: 'short/:short', component: ShortDetailComponent, canActivate: [LoggedInGuard]},
  {path: 'new-item/:short', component: UploadFormComponent, canActivate: [LoggedInGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
