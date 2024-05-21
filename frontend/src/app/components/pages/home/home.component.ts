import { Component, OnInit } from '@angular/core';
import { DoughnutService } from 'src/app/services/doughnut.service';
import { Doughnut } from 'src/app/shared/models/Doughnut';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  	doughnuts: Doughnut[] = [];
  	
  constructor(private doughnutService: DoughnutService, activatedRoute: ActivatedRoute) { 
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.doughnuts = this.doughnutService.getAllDoughnutsBySearchTerm(params.searchTerm);
      else
      this.doughnuts = doughnutService.getAll();
  })
  }  
  

  ngOnInit(): void {
  }

}
