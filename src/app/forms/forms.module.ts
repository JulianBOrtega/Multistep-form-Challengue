import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsModule } from '@angular/forms';

import { InfoPage } from './pages/info-page/info-page.component';
import { PlanPage } from './pages/plan-page/plan-page.component';
import { AddonsPage } from './pages/addons-page/addons-page.component';
import { SummaryPage } from './pages/summary-page/summary-page.component';

@NgModule({
  declarations: [
    InfoPage,
    PlanPage,
    AddonsPage,
    SummaryPage
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsRoutingModule
  ]
})

export class FormsPageModule { }
