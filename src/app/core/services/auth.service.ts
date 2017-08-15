import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  public redirectUrl: string;
  public authType: string = 'login';
  constructor(
    private db: AngularFireDatabase,
  ) {
    
  } 
}