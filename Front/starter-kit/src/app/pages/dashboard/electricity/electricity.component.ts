import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { Electricity, ElectricityChart } from '../../../@core/data/electricity';
import { DataService } from '../../../service/data.service';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
})
export class ElectricityComponent implements OnDestroy {

  private alive = true;

  listData: Electricity[] = [];
  chartData: ElectricityChart[] = [];

  type = 'year';
  types = ['year'];
  currentConsumedAmount = 0;
  currentSpentAmount = 0;

  currentTheme: string;
  themeSubscription: any;
  
  /**
   * Konstruktor klasy ElectricityComponent
   * @param  {DataService} privateservice dane z serwisu
   * @param  {NbThemeService} privatethemeService dane z prywatnego serwisu
   */
  constructor(private service: DataService,
              private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });

    this.service.getEnergyData()
    .pipe(takeWhile(() => this.alive))
    .subscribe((listData: Electricity[]) => {
	  let tempArray: Electricity[] = [];
	  let array: ElectricityChart[] = [];
	  this.currentConsumedAmount = 0;
	  this.currentSpentAmount = 0;
	  
	  tempArray.push(listData['energyUsageList']);
      this.listData = tempArray;
	  //this.listData = listData['energyUsageList'];
	  
	  for(let i = 0; i < this.listData[0]['energyUsages'].length; i++) {
	    array.push({'label': (""+(i+1)), 'value': parseInt(this.listData[0]['energyUsages'][i]['kWatts'])});
		this.currentConsumedAmount += parseInt(this.listData[0]['energyUsages'][i]['kWatts']);
		this.currentSpentAmount += parseInt(this.listData[0]['energyUsages'][i]['cost']);
	  }
      this.chartData = array;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
