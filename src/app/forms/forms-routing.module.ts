import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPage } from './pages/info-page/info-page.component';
import { PlanPage } from './pages/plan-page/plan-page.component';
import { AddonsPage } from './pages/addons-page/addons-page.component';
import { SummaryPage } from './pages/summary-page/summary-page.component';

const routes: Routes = [
  {
    path: 'step-1',
    component: InfoPage
  },
  {
    path: 'step-2',
    component: PlanPage
  },
  {
    path: 'step-3',
    component: AddonsPage
  },
  {
    path: 'step-4',
    component: SummaryPage
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'step-1'
  },
  {
    path: '**',
    redirectTo: 'step-1'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormsRoutingModule { }
