import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offers' , component: OffersComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
