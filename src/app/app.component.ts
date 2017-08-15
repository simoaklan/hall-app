import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  halls: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase){
    this.halls = db.list("/hall");
  }
  title = 'app';
}
