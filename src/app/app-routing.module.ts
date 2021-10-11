import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSettingComponent } from './components/profile-setting/profile-setting.component';


const routes: Routes = [
  { path: '', redirectTo: 'profile-setting', pathMatch: 'full' },  
  { path: 'profile-setting', component: ProfileSettingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
