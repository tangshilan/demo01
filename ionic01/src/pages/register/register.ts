import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';

import { usercreds } from '../../models/usercreds';
import { LoginPage } from '../login/login';

import * as wilddog from 'wilddog';

var config = {
  authDomain: "wd3709142182jgtous.wilddog.com",
  syncURL: "https://wd3709142182jgtous.wilddogio.com/"
 };

 wilddog.initializeApp(config);
 var ref = wilddog.sync().ref();


//IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  newuser = {
    number: '',
    password: '',
    displayName: ''
  }

  //ToastController  小弹框
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController ,public loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  signup() {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });

    if (this.newuser.number == '' || this.newuser.password == '' || this.newuser.displayName == '') {
      toaster.setMessage('All fields are required dude');
      toaster.present();
    }
    else if (this.newuser.password.length < 7) {
      toaster.setMessage('Password is not strong. Try giving more than six characters');
      toaster.present();
    }
    else {
      let loader = this.loadingCtrl.create({
        content: 'Please wait'
      });
      loader.present();

      this.adduser(this.newuser).then((res: any) => {
        loader.dismiss();
        if (res.success)
          this.navCtrl.push(LoginPage);
        else
          alert('Error' + res);
      })
    }
   
 }

adduser(newuser){
  var promise = new Promise((resolve, reject) => { wilddog.auth().createUserWithPhoneAndPassword(newuser.number,newuser.password).then(function(user){

     ref.child("USER").child(newuser.number).set(
       {
         email_2:{
           "name":newuser.displayName,
           firend:{
             "1":"jack",
             "2":"lancy",
           }
         }
       }
     );
     resolve({ success: true });
  }).catch(function (error) {
       // 错误处理
     //  alert(error);
      // console.log(error);
      reject(error);
   });
  })
  return promise;
}

 goback() {
  this.navCtrl.push(LoginPage);
}


}
