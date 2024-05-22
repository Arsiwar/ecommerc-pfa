import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './common/features/features.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { FeaturesDetailsComponent } from './common/features-details/features-details.component';
import { FormComponent } from './common/form/form.component';

const routes: Routes = [
  { path: '',
   component: FeaturesComponent }, // Route par défaut vers FeaturesComponent
{ path: 'products',
 component: ProductListComponent },
 {
  path:'details',
  component:FeaturesDetailsComponent
 },
 {
  path:'form',
  component:FormComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
