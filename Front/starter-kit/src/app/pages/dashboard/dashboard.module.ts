import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';

@NgModule({
  imports: [
    ThemeModule,
	NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
	ElectricityComponent,
    ElectricityChartComponent,
	RoomsComponent,
	RoomSelectorComponent,
	SecurityCamerasComponent,
	TemperatureComponent,
	TemperatureDraggerComponent,
  ],
})
export class DashboardModule { }
