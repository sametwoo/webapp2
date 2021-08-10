import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './components/apply/apply.component';
import { ApproveComponent } from './components/approve/approve.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
	{ path: '', redirectTo: 'apply', pathMatch: 'full' },
	{ path: 'apply', component: ApplyComponent },
	{ path: 'approve', component: ApproveComponent },
	{ path: 'approve/:role', component: ApproveComponent },
	{ path: 'approve/:role/:unit', component: ApproveComponent },
	{ path: 'onleave', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
