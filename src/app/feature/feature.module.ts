import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { Route, RouterModule } from '@angular/router';

const featureRoutes:Route[] = [
  {
    path:'',
    component:FeatureComponent
  }
]

@NgModule({
  declarations: [
    FeatureComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(featureRoutes)
  ]
})
export class FeatureModule { }
