import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MessageI } from '../models/messages.interface'
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private HzformCollection: AngularFirestoreCollection<MessageI>;
  constructor(private afs: AngularFirestore) {
    this.HzformCollection = afs.collection<MessageI>('hzform');
  }

  saveMessage(newHzform: MessageI): void{
    this.HzformCollection.add(newHzform);
  }
  
}
