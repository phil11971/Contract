import { Component, OnInit } from '@angular/core';
import Contract from '../Contract';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  providers: [DataService]
})

export class ContractComponent implements OnInit {

  contracts: Contract[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadContracts();    // загрузка данных при старте компонента  
  }

  loadContracts() {
    this.dataService.getContracts()
      .subscribe((data: Contract[]) => { this.contracts = data; console.log(JSON.stringify(data)); });
  }
  
}
