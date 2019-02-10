import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { TabsPage } from '../pages/tabs/tabs';
import { CategoryPage } from "../pages/category/category";
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";
import { MainPage } from "../pages/main/main";
import { CartPage } from "../pages/cart/cart";
import { WishListPage } from "../pages/wish-list/wish-list";
import { CheckoutPage } from "../pages/checkout/checkout";
import { ReceiptPage } from "../pages/receipt/receipt";
import { ViewItemPage } from "../pages/view-item/view-item";

import { MoltinService } from "./services/MoltinService";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CategoryPage,
    SigninPage,
    SignupPage,
    MainPage,
    CartPage,
    WishListPage,
    CheckoutPage,
    ReceiptPage,
    ViewItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CategoryPage,
    SigninPage,
    SignupPage,
    MainPage,
    CartPage,
    WishListPage,
    CheckoutPage,
    ReceiptPage,
    ViewItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoltinService
  ]
})
export class AppModule {}
