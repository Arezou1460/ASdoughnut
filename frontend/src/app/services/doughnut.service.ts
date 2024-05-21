import { Injectable } from '@angular/core';
import { sample_doughnuts } from 'src/data';
import { Doughnut } from '../shared/models/Doughnut';

@Injectable({
  providedIn: 'root'
})
export class DoughnutService {

  constructor() { }

  getAll(): Doughnut[] {
    return sample_doughnuts;
  }

  getAllDoughnutsBySearchTerm(searchTerm: string){
    return this.getAll().filter(doughnut => doughnut.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getDoughnutById(doughnutId: string):Doughnut{
    return this.getAll().find(doughnut => doughnut.id == doughnutId) ?? new Doughnut();
    }
}
