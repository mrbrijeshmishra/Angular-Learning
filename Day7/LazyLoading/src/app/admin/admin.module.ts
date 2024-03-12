import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ListingComponent } from './listing/listing.component';

console.warn("admin module loaded")

@NgModule({
  declarations: [
    LoginComponent,
    ListingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
