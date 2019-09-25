import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ContractComponent } from './contract/contract.component';
import { RefbookComponent } from './refbook/refbook.component';
import { AddcontractComponent } from './contract/addcontract/addcontract.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ContractComponent,
    RefbookComponent,
    AddcontractComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ContractComponent, pathMatch: 'full' },
      { path: 'refbooks', component: RefbookComponent },
      { path: 'addcontract', component: AddcontractComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
