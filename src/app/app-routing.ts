import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayDealEventComponent } from './frontend/display-deal-event/display-deal-event.component';

const routes: Routes = [
  { path: 'deal-event', component: DisplayDealEventComponent }
];

export const routing = RouterModule.forRoot(routes);

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
