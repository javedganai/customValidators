import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModalwrapperComponent } from './modalwrapper/modalwrapper.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
const routes: Routes = [{
  path:'',component:ReactiveformsComponent
},
{
  path:'modal',component:ModalwrapperComponent
},
{
  path:'forms',component:ReactiveformsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
