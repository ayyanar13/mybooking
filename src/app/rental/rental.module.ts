import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router'
import {NgPipesModule} from 'ngx-pipes';



import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import {RentalService} from './shared/rental.service';
import { RentalDetailsComponent } from './rental-details/rental-details.component'

const appRoutes:Routes=[
{path:'rentals',
component:RentalComponent,
children:[{path:"",component:RentalListComponent},
{path:":rentalid",component:RentalDetailsComponent}]

},

];

@NgModule({
  declarations: [
    RentalListComponent,
    RentalListItemComponent,
    RentalComponent,
    RentalDetailsComponent
  ],
  imports:[CommonModule,
  RouterModule.forChild(appRoutes),
  NgPipesModule
  ],
  providers:[ RentalService]

  })


  export class RentalModule { }