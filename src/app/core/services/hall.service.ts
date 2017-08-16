import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()

export class HallService{ 
  halls: FirebaseListObservable<any[]>;
  constructor ( private db: AngularFireDatabase 
    ){              
    this.halls = db.list("/hall");
  }
}