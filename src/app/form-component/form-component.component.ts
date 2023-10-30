import { Component } from '@angular/core';
import { Firestore, collectionData,addDoc  } from '@angular/fire/firestore';
import { DocumentData, collection, doc, setDoc } from "firebase/firestore"; 

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {


  public formvaluename:string="";
  public formvalueid:number=0;

  firestore: Firestore
  constructor(firestore: Firestore){
  this.firestore=firestore;

  }





  showid(event:any){
    var value= parseInt(event.target.value);
    this.formvalueid=value;
  }
  
  showname(event:any){
    this.formvaluename=event.target.value
  }

  async save(){

    const nuevoUsuario = {
      Id_Usuario: this.formvalueid,
      Nombre: this.formvaluename 
    };
  
    console.log(nuevoUsuario)
  
    const docRef =  addDoc(collection(this.firestore, 'usuarios'), nuevoUsuario);
  
  
  }
  



  }


