import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShortDetailComponent} from './short-detail/short-detail.component';
import {EmptyComponent} from './empty/empty.component';

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
