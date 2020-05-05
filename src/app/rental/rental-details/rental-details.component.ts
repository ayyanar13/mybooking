import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.scss']
})
export class RentalDetailsComponent implements OnInit {
currentid:string;
rental:Rental;
	
  constructor(private route:ActivatedRoute,private rentalservice:RentalService) { }

  ngOnInit(): void {
  this.rental= new Rental();
  this.route.params.subscribe(
  (params)=>{
  console.log("params",params)
  
  this.getRental(params['rentalid'])
  })

  }
  getRental(rentalid:string){
  this.rentalservice.getrentalbyid(rentalid).subscribe(
  (rental:Rental)=>{
  this.rental=rental
  })

  }

}
