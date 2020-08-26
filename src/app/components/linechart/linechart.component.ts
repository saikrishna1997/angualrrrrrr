import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import { Data } from 'src/app/data';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})

export class LinechartComponent implements OnInit {


  url = 'https://reqres.in/api/users?page=2';  
  data: Data[

  ]; 
  //PlayerName = ['Rohit','Sachin','Kohli','Rahul'];
  //Runs = ['59','60','72','32'];
 // Player = ['Rohit','Sachin','Kohli','Rahul'];  
  //Run = ['20','10','40','60']; 

  id = [];
  first_name = [];
   
  Linechart = []; 


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {


    this.httpClient.get(this.url).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.id.push(x.id);  
        this.first_name.push(x.first_name);  
      });  
      
       
      this.Linechart = new Chart('canvas', {  
        type: 'line',  
        data: {  
          
          labels: this.id,  
          datasets: [  
            {  
              data: this.id,  
              borderColor: '#3cb371',  
              backgroundColor: "#0000FF",  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
    });  
    }}