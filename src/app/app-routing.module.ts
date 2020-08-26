import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { LinechartComponent } from "./components/linechart/linechart.component"; 
import { BarchartComponent } from './components/barchart/barchart.component';
import { PiechartComponent } from './components/piechart/piechart.component';

const routes: Routes = [

  { path : 'LineChart', component: LinechartComponent},
  { path : 'BarChart', component : BarchartComponent},
  { path : 'PieChart', component : PiechartComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
