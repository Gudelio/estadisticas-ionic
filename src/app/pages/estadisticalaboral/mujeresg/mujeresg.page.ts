import { Component, OnInit, ViewChild } from '@angular/core';
import { IonItemSliding, NavController } from '@ionic/angular';
import { AngularFirestore, docChanges } from '@angular/fire/compat/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { BubbleController, Chart } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-mujeresg',
  templateUrl: './mujeresg.page.html',
  styleUrls: ['./mujeresg.page.scss'],
})
export class MujeresgPage implements OnInit {

  indicador: any = [];
  cantidad: any = [];

  @ViewChild(BaseChartDirective) chart:  BaseChartDirective;

  constructor(public nav: NavController, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('/Estadistica-Mujeres/', ref => ref
      .orderBy('indicador', 'asc')).get().toPromise().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let item = doc.data(); 
        
        let cantidad =
          item && typeof item === "object" && "cantidad" in item
            ? (item! as { cantidad: string }).cantidad
            : null;  
        if(!cantidad){}
        this.cantidad.push(cantidad);
          
        let indicador =
          item && typeof item === "object" && "indicador" in item
            ? (item! as { indicador: string }).indicador
            : null;
        if(!indicador){}
        this.indicador.push(indicador);
    });
  });
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,

    layout: {
      padding: 10,
  },
    
    scales: {
      x:  { stacked: true, ticks: {
        maxRotation: 70,
        minRotation: 70,
        stepSize: 3,
     }},
      y: {
        stacked: true,
        max: 110000,
        min: 0,
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Mujeres'
    },
      legend: {
        display: true,
        position: 'bottom',
        align: 'start',
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        font: {
          size: 9,
        },
      }
    }
  };

  public barChartType: ChartType = 'bar';

  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: this.indicador, 
    datasets: [ 
      { data: this.cantidad,
        backgroundColor: ['#df0000'],
        label: 'Valor' }
    ]
  };

   public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  Hombres(){
    this.nav.navigateForward(['estadisticalaboral/hombres']);
  }

}
