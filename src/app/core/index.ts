import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';

import { SharedModule } from '../shared';
import { HallService } from './services/hall.service';
import { AuthService } from './services/auth.service';

import { environment } from '../../environments/environment';


@NgModule({
  imports: [        
    SharedModule
  ],
  exports:[ 

  ],
  providers: [
    HallService,
    AuthService
  ],
  declarations: [
    
  ]
})
export class CoreModule { }
