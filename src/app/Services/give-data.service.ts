import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc} from '@angular/fire/firestore';
import { Accounts } from '../accounts';

@Injectable({
  providedIn: 'root'
})
export class GiveDataService {

  constructor(private firestore: Firestore) { }

  addUser(accounts: Accounts){
    const referencia = collection(this.firestore,'accounts');

    return addDoc(referencia,accounts);
  }

}
