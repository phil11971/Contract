import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Stage } from '../Stage';

@Component({
  selector: 'ref-book',
  templateUrl: './refbook.component.html',
  providers: [DataService]
})
export class RefbookComponent {
  
  stages: Stage[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadStages();    // загрузка данных при старте компонента  
  }

  loadStages() {
    this.dataService.getStages()
      .subscribe((data: Stage[]) => { this.stages = data; console.log(JSON.stringify(data)); });
  }
}
