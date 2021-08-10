import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyComponent } from './components/apply/apply.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApproveComponent } from './components/approve/approve.component';
import { ReportComponent } from './components/report/report.component';
import { BasicinfoComponent } from './components/basicinfo/basicinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplyComponent,
    ApproveComponent,
    ReportComponent,
    BasicinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
