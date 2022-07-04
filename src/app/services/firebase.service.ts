import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, deleteUser, getAuth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { collection, collectionData, deleteDoc, doc, Firestore,  query, setDoc, updateDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { addDoc, orderBy} from '@firebase/firestore';
import { Observable } from 'rxjs';
import OrderFirebase from '../interfaces/orders-firebase';
@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  constructor(
     private firestore: Firestore
     ){ }

  async addOrderToFirebase(order: OrderFirebase){
    const ordenRef = collection(this.firestore, 'ordenes');
    const ann = await addDoc(ordenRef, order);
    order.id = ann.id;
    return ann;
  }

  getOrders(): Observable<any[]>{
    const ordenRef = collection(this.firestore, 'ordenes');
    const  queryRef = query(ordenRef,orderBy('Date', 'desc'));
    return collectionData(queryRef, {idField: 'id'}) as Observable<any[]>;
  }

  updateStatusOrder(order: OrderFirebase, statusValue: string):Promise<any>{
    const docRef = doc(this.firestore, "ordenes", String(order.id));
    const queryRef = this.getOrders();
    return updateDoc(docRef,{Status: statusValue})
  }

  updateTimerOrder(order: OrderFirebase, timer: number):Promise<any>{
    const docRef = doc(this.firestore, "ordenes", String(order.id));
    const queryRef = this.getOrders();
    return updateDoc(docRef,{Timer: timer});
  }


}
