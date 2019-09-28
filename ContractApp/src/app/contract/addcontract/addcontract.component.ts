import { Component, OnInit } from '@angular/core';
import Contract from '../../Contract';
import { DataService } from '../../data.service';
import { Stage } from 'src/app/Stage';

@Component({
  selector: 'app-addcontract',
  templateUrl: './addcontract.component.html',
  styleUrls: ['./addcontract.component.css'],
  providers: [DataService]
})
export class AddcontractComponent implements OnInit {

  contract: Contract = new Contract() //новый контракт
  stages: Stage[] = [] // Stages для select'a
  filterStages: Stage[] = [] // новые Stages контракта
  myselectedStages: number[] = [] //выбраннные значения в select'e

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadStages();
  }

  loadStages() {
    this.dataService.getStages()
      .subscribe((data: Stage[]) => { this.stages = data; console.log(JSON.stringify(data)); });
  }

  changeStages() {
    console.log(this.myselectedStages)
    let mas = this.myselectedStages.concat()
    this.filterStages = this.stages.filter(function(e) {
      return mas.some(function(a) {
        return e.stageId == a
      })
    })
  }

  // сохранение данных
  save() {
    if (this.contract.contractId == null) {
      this.contract.stages = this.filterStages;
      this.dataService.addContract(this.contract)
    } else {
      this.dataService.updateContract(this.contract)
    }
    this.cancel();
  }

  cancel() {
    this.contract = new Contract();
  }

  editContract(c: Contract) {
    this.contract = c;
  }

  delete(c: Contract) {
    this.dataService.deleteContract(c.contractId)
  }
}
