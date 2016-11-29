import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShortDetailComponent} from './main-page/short-detail/short-detail.component';
import {EmptyComponent} from './main-page/empty/empty.component';

const routes: Routes = [
  {path: '', component: EmptyComponent},
  {path: 'short/:seq', component: ShortDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
