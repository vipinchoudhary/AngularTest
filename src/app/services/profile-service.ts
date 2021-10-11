import { Injectable } from '@angular/core';
export interface IProfile {
  firstName : string;
  lastName : string;
  username : string;
  age : number;
  email: string
  }

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public user! : IProfile ;

constructor () {}

getProfileUser (): Promise<IProfile> {
    return new Promise ((resolve , reject) => {
    setTimeout (() => {
    if ( Math.round(Math.random())) {
          this.user = {
          firstName : 'Michael' ,
          lastName : 'Collins' ,
          username : 'michael.collins' ,
          age : 30,
          email:''
          } ;
resolve( this.user) ;
} 
else {
  reject({ error : 'Profile not found' }) ;
 }
} ,
 Math.random()*5000) ;
}) ;
}

setName (user: IProfile ) {
return new Promise ((resolve , reject) => {
        setTimeout (() => {
        if ( Math.round (Math.random())) {
        this.user.firstName = user.firstName ;
        this.user.lastName = user.lastName ;
        resolve(this.user) ;
        } else {
        reject({ error : 'Invalid name' }) ;
        }
        }
         , Math.random () * 5000 ) ;
}) ;
}

setUserEmail (user: IProfile ) {
  return new Promise ((resolve , reject) => {
  setTimeout (() => {
  if (Math.round(Math.random())) {
  this.user.email = user.firstName.toLowerCase().trim() +'.'+ this.user.lastName.toLowerCase().trim() +"@blueface.com" ;
  resolve(this.user ) ;
  } else {
  reject({ error : 'Error on email generation' }) ;
  }
  } , Math.random () * 5000 ) ;
  }) ;
  }

}
