import { Component, OnInit } from '@angular/core';
import {IProfile , ProfileService} from '../../services/profile-service' ;
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.css']
})
export class ProfileSettingComponent implements OnInit {

  public title = 'Profile' ;
  public user! : IProfile ;
  public showerror = false;
  public loading =true;
  public saved = false;
  public errormsg!: string;
  public preferedLanguage="en";
constructor ( private profile : ProfileService, private translate: TranslateService) { 
 this.translate.setDefaultLang('en');
   this.translate.use('en');
 this.user = {
  firstName : '' ,
  lastName : '' ,
  username : '' ,
  age : 0,
  email:''
  } ;
 }
ngOnInit () {
  this.showerror = this.saved = false;
  this.loading =true;
  this.getProfile();
}

getProfile()
{
    const promise = this.profile.getProfileUser();
    
    return promise.then(
      (response: any) => {
        // Success callback
        this.user = response;
        this.showerror = this.loading=false;
      }
    ).catch((error: any) => {
      // Error callback
      this.showerror = true;
      this.errormsg = error.error;
      console.log(error);
      this.loading=false;
    });
  
}
saveProfile () {
 this.loading = true;
  this.saved=true;
  this.showerror = false;
  const promise = this.profile.setName(this.user);
    
  return promise.then(
    (response: any) => {
      // Success callback
      this.user = response;
      this.showerror = this.loading= this.saved = false;
     this.setUserEmail(this.user);
    }
  ).catch((error: any) => {
    // Error callback
    this.showerror = true;
    this.errormsg = error.error;
    console.log(error);
    this.loading=false;
    this.saved = false;
  });
}

setUserEmail(user : IProfile){
  this.loading = true;
  this.saved=true;
  const promise = this.profile.setUserEmail(this.user);    
  return promise.then(
    (response: any) => {
      // Success callback
      this.user = response;
      this.showerror = this.loading= this.saved = false;
    }
  ).catch((error: any) => {
    // Error callback
    this.showerror = true;
    this.errormsg = error.error;
    ;
    console.log(error);
    this.loading= this.saved = false;
  });
}

changeCountry(){
  this.translate.use(this.preferedLanguage);
}

}
