import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';


import * as wilddog from 'wilddog';

var config = {
  authDomain: "wd3709142182jgtous.wilddog.com",
  syncURL: "https://wd3709142182jgtous.wilddogio.com/"
 };

 wilddog.initializeApp(config);
 var ref = wilddog.sync().ref();

//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {
    number: '',
    password: '',
    displayName: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController ,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin(loguser) {

    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    });
    loader.present();
    this.login(this.user).then((res: any) => {
      loader.dismiss();
      if (res.success)
        this.navCtrl.push(TabsPage);
      else
        alert('Error' + res);
    })
    
  }
  login(loguser){

    var promise = new Promise((resolve, reject) => { wilddog.auth().signInWithPhoneAndPassword(loguser.number, loguser.password).then(function(res){

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

  signup() {
    this.navCtrl.push(RegisterPage);
  }

}
