import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataService } from './data.service';

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
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule.forRoot([
      { path: '', component: ContractComponent, pathMatch: 'full' },
      { path: 'refbooks', component: RefbookComponent },
      { path: 'addcontract', component: AddcontractComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
