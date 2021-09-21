import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes=[
  {path:'', component:DashboardComponent},
  {path:'edit', component:EditComponent},//:name
  {path:'customer-view/:name',component:CustomerViewComponent },
  {path:'add', component:AddComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerViewComponent,
    AddComponent,
    EditComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
