import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { DocumentData, collection, doc, setDoc } from "firebase/firestore"; 
import { inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({

  selector: 'app-fire-element',
  templateUrl: './fire-element.component.html',
  styleUrls: ['./fire-element.component.scss']
})
export class FireElementComponent implements OnInit {

  public listUsers:Usuario[]=[];
  public findUsers:Usuario| undefined={
    
    Id_Usuario:0,
    Nombre:""

  };
  inputValue: number = 0;
  //private usuariosCollection: AngularFirestoreCollection<Usuario>; // Referencia a la colección
  usuarios$: Observable<Usuario[]>;
  firestore: Firestore;
 // Import the functions you need from the SDKs you need
  //item$: Observable<DocumentData[]>;
  //firestore: Firestore = inject(Firestore);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
constructor(firestore: Firestore) { 

  this.firestore = firestore;
  const usuariosCollection = collection(this.firestore, 'usuarios');
  this.usuarios$ = collectionData(usuariosCollection) as Observable<Usuario[]>;
  //const itemCollection = collection(this.firestore, 'usuarios');
  //this.item$ = collectionData(itemCollection);
  
  //console.log(this.usuarios$)
  

}

ngOnInit(): void {
  this.usuarios$.subscribe(data => {
//console.log(data)
    data.forEach(elemet=> 
       this.listUsers.push(elemet)
      )

  });

}
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

execute(){

}

handleInput(event:any){
  var iduser=event.target.value
  this.inputValue = iduser.toString();

  //console.log(this.inputValue);
}

Enviar(){

  this.findUsers= this.listUsers.find(element=> element.Id_Usuario==this.inputValue)
  //console.log(this.findUsers)

}

// Initialize Firebase
//public app = initializeApp(this.firebaseConfig);
//public analytics = getAnalytics(this.app);

}

export interface Usuario {
  Id_Usuario:number,
  Nombre: string,
  
};

