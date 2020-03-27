import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Message } from '../models/message.interface'
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private contactCollection: AngularFirestoreCollection<Message>;
  constructor(private afs: AngularFirestore) {
    this.contactCollection = afs.collection<Message>('contact');
  }

  saveMessage(newContact: Message): void{
    this.contactCollection.add(newContact);
  }
  
}
