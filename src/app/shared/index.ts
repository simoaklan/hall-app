import { ModuleWithProviders, NgModule,
         Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { MaterialModule} from '@angular/material';
import { Hall } from './models/hall';
import { Reservation} from './models/reservation';

@NgModule({
  imports: [
    CommonModule,    
  ],
  declarations: [  ],
  exports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MaterialModule,
  ]
})
export class SharedModule { }
