import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
    component:AboutComponent,
    path:'about',
    children:[
      {
        path:'company',
        component:AboutCompanyComponent
      },
      {
        component:AboutMeComponent,
        path:'me',
      }
    ]
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'dynamic/:num',
    component:UserComponent
  },
  {
    path:'**',
    component:NoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
