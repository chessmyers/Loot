import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {NgForm} from "@angular/forms";
import {CategoryPage} from "../category/category";


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToSignUp() {
    this.navCtrl.push(SignupPage);
  }

  onSignIn(form: NgForm) {
    this.navCtrl.setRoot(CategoryPage);
  }

}
