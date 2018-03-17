import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonagensRoutingModule } from './personagens-routing.module';
import { PersonagensComponent } from './personagens.component';

@NgModule({
  imports: [
    CommonModule,
    PersonagensRoutingModule
  ],
  declarations: [PersonagensComponent]
})
export class PersonagensModule { }
