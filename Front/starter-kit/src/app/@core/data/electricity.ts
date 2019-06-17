export interface Month {
  id: number;
  month: string;
  delta: string;
  down: boolean;
  kWatts: string;
  cost: string;
}

export interface Electricity {
  title: string;
  active?: boolean;
  energyUsages: Month[];
}

export interface ElectricityChart {
  label: string;
  value: number;
}