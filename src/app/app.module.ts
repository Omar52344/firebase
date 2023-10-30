import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FireElementComponent } from './fire-element/fire-element.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormComponentComponent } from './form-component/form-component.component';







@NgModule({
  declarations: [
    AppComponent,
    FireElementComponent,
    FormComponentComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp({  
      apiKey: "AIzaSyBz7CdJG-65gRL5Lvkxp3FpX3XpE8XO9is",
      authDomain: "sistema-bab37.firebaseapp.com",
      projectId: "sistema-bab37",
      storageBucket: "sistema-bab37.appspot.com",
      messagingSenderId: "588431641122",
      appId: "1:588431641122:web:1184738642ed1bbb35587b",
      measurementId: "G-KYQTRRQ7VJ"
    })),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
