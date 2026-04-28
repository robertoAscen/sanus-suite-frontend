// angular import
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ThemeService } from 'src/app/theme/shared/service/customs-theme.service';
import { ChartDB } from 'src/app/fack-db/chartData';

// rxjs
import { Subscription } from 'rxjs';

// third party
import {
  NgApexchartsModule,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexYAxis,
  ApexFill,
  ApexStroke,
  ApexLegend,
  ApexGrid,
  ApexMarkers,
  ApexAnnotations,
  ApexTheme,
  ApexTooltip
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  colors: string[];
  labels: string[];
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  fill: ApexFill;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
  markers: ApexMarkers;
  annotations: ApexAnnotations;
  theme: ApexTheme;
};

@Component({
  selector: 'app-apex-chart',
  standalone: true,
  imports: [CommonModule, SharedModule, NgApexchartsModule],
  templateUrl: './crt-apex.component.html',
  styleUrls: ['./crt-apex.component.scss']
})
export class ApexChartComponent implements OnInit, OnDestroy {
  // private props
  @ViewChild('Chart') chart!: ChartComponent;
  barChart!: Partial<ChartOptions>;
  barStackedChart!: Partial<ChartOptions>;
  barHorizontalChart!: Partial<ChartOptions>;
  barHStackChart!: Partial<ChartOptions>;
  pieChart!: Partial<ChartOptions>;
  donutChart!: Partial<ChartOptions>;
  radialChart!: Partial<ChartOptions>;
  customsAngleChart!: Partial<ChartOptions>;
  lineChart!: Partial<ChartOptions>;
  realTimeChart!: Partial<ChartOptions>;
  areaChart!: Partial<ChartOptions>;
  dateTimeChart!: Partial<ChartOptions>;
  mixedChart!: Partial<ChartOptions>;
  lineAreaChart!: Partial<ChartOptions>;
  candlestickChart!: Partial<ChartOptions>;
  bubbleChart!: Partial<ChartOptions>;
  bubble3DChart!: Partial<ChartOptions>;
  scatterChart!: Partial<ChartOptions>;
  scatterDateTimeChart!: Partial<ChartOptions>;
  heatmapChart!: Partial<ChartOptions>;
  heatmapRoundedChart!: Partial<ChartOptions>;
  chartSub = new Subscription();
  themeColor = new Subscription();

  // eslint-disable-next-line
  chartDB: any;

  preset = ['#0e9e4a', '#4099ff', '#FF5370'];
  customs_color = ['#0050B3', '#4099ff', '#52C41A', '#FF4D4F'];
  pie_color = ['#0050B3', '#4099ff', '#52C41A', '#FF4D4F', '#FAAD14'];
  line_colors = ['#0050B3'];
  area_colors = ['#0050B3', '#4099ff'];

  constructor(private themeService: ThemeService) {
    this.chartDB = ChartDB;
    const {
      barChart,
      bubbleChart,
      bubble3DChart,
      scatterChart,
      scatterDateTimeChart,
      heatmapChart,
      heatmapRoundedChart,
      lineAreaChart,
      candlestickChart,
      barStackedChart,
      barHorizontalChart,
      barHStackChart,
      pieChart,
      donutChart,
      radialChart,
      customsAngleChart,
      lineChart,
      realTimeChart,
      areaChart,
      dateTimeChart,
      mixedChart
    } = this.chartDB;

    (this.barChart = barChart),
      (this.barStackedChart = barStackedChart),
      (this.barHorizontalChart = barHorizontalChart),
      (this.barHStackChart = barHStackChart),
      (this.pieChart = pieChart),
      (this.donutChart = donutChart),
      (this.radialChart = radialChart),
      (this.customsAngleChart = customsAngleChart),
      (this.lineChart = lineChart),
      (this.realTimeChart = realTimeChart),
      (this.areaChart = areaChart),
      (this.dateTimeChart = dateTimeChart),
      (this.mixedChart = mixedChart),
      (this.lineAreaChart = lineAreaChart),
      (this.candlestickChart = candlestickChart),
      (this.bubbleChart = bubbleChart),
      (this.bubble3DChart = bubble3DChart),
      (this.scatterChart = scatterChart),
      (this.scatterDateTimeChart = scatterDateTimeChart),
      (this.heatmapChart = heatmapChart),
      (this.heatmapRoundedChart = heatmapRoundedChart);
  }

  ngOnInit(): void {
    this.chartSub = this.themeService.isDarkTheme.subscribe((isDark: string) => {
      const tooltipTheme = isDark === 'dark' ? 'dark' : 'light';
      const tooltip = { theme: tooltipTheme };

      this.barChart = { ...this.barChart, tooltip };
      this.barStackedChart = { ...this.barStackedChart, tooltip };
      this.barHorizontalChart = { ...this.barHorizontalChart, tooltip };
      this.barHStackChart = { ...this.barHStackChart, tooltip };
      this.lineChart = { ...this.lineChart, tooltip };
      this.realTimeChart = { ...this.realTimeChart, tooltip };
      this.areaChart = { ...this.areaChart, tooltip };
      this.dateTimeChart = { ...this.dateTimeChart, tooltip };
      this.mixedChart = { ...this.mixedChart, tooltip };
      this.lineAreaChart = { ...this.lineAreaChart, tooltip };
      this.candlestickChart = { ...this.candlestickChart, tooltip };
      this.bubbleChart = { ...this.bubbleChart, tooltip };
      this.bubble3DChart = { ...this.bubble3DChart, tooltip };
      this.scatterChart = { ...this.scatterChart, tooltip };
      this.scatterDateTimeChart = { ...this.scatterDateTimeChart, tooltip };
      this.heatmapChart = { ...this.heatmapChart, tooltip };
      this.heatmapRoundedChart = { ...this.heatmapRoundedChart, tooltip };
    });
  }

  ngOnDestroy() {
    this.themeColor.unsubscribe();
    this.chartSub.unsubscribe();
  }
}
