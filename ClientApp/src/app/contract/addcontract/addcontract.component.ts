import { Component, OnInit } from '@angular/core';
import Contract from '../../Contract';
import { DataService } from '../../data.service';
import Stage from '../../Stage';
import { NgForm, FormControl } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-addcontract',
  templateUrl: './addcontract.component.html',
  styleUrls: ['./addcontract.component.css'],
  providers: [DataService]
})
export class AddcontractComponent implements OnInit {

  contract: Contract = new Contract()   // изменяемый товар
  stages: Stage[]
  selectedStages: any[] = []

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadStages();    // загрузка данных при старте компонента  
  }

  loadStages() {
    this.dataService.getStages()
      .subscribe((data: Stage[]) => { this.stages = data; console.log(JSON.stringify(data)); });
  }

  changeStages(form: NgForm) {
    this.selectedStages = (<FormControl>form.controls['selectedStages']).value;
  }

  // сохранение данных
  save() {
    if (this.contract.contractId == null) {
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
