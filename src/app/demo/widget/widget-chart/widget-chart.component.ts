// angular import
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ChartReportComponent } from './chart-report/chart-report.component';
import { ChartDB } from 'src/app/fack-db/chartData';
import { ThemeService } from 'src/app/theme/shared/service/customs-theme.service';

// third party
import { BarRatingModule } from 'ngx-bar-rating';
import {
  NgApexchartsModule,
  ChartComponent,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexFill,
  ApexGrid,
  ApexPlotOptions,
  ApexTooltip,
  ApexTheme,
  ApexResponsive,
  ApexMarkers
} from 'ng-apexcharts';

// rxjs
import { Subscription } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  fill: ApexFill;
  grid: ApexGrid;
  theme: ApexTheme;
  responsive: ApexResponsive[];
  markers: ApexMarkers;
};

@Component({
  selector: 'app-widget-chart',
  standalone: true,
  imports: [ChartReportComponent, SharedModule, BarRatingModule, NgApexchartsModule],
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.scss']
})
export default class WidgetChartComponent implements OnInit, OnDestroy {
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions: Partial<ChartOptions>;
  chartOptions_1: Partial<ChartOptions>;
  analyticsSeoCard: Partial<ChartOptions>;
  chartSeoCard: Partial<ChartOptions>;
  chartUniqueVisitor: Partial<ChartOptions>;
  chartStatistics: Partial<ChartOptions>;
  chartProcessCompliance: Partial<ChartOptions>;
  chartUser1: Partial<ChartOptions>;
  chartUser2: Partial<ChartOptions>;
  chartUser3: Partial<ChartOptions>;
  chartAmount1: Partial<ChartOptions>;
  chartAmount2: Partial<ChartOptions>;
  chartAmount3: Partial<ChartOptions>;
  chartAmount4: Partial<ChartOptions>;
  completedTicketCAC: Partial<ChartOptions>;
  transactions1CAC: Partial<ChartOptions>;
  transactions2CAC: Partial<ChartOptions>;
  storageCAC: Partial<ChartOptions>;
  accountCAC: Partial<ChartOptions>;
  percentageCAC: Partial<ChartOptions>;
  deviceCAC: Partial<ChartOptions>;
  analyticsUser: Partial<ChartOptions>;
  analyticsSession: Partial<ChartOptions>;
  analyticsPageView: Partial<ChartOptions>;
  analyticsPageSession: Partial<ChartOptions>;
  analyticsAvgSession: Partial<ChartOptions>;
  analyticsBounceRate: Partial<ChartOptions>;
  timeUserCAC: Partial<ChartOptions>;
  horizontalBarCAC: Partial<ChartOptions>;
  conversionsBarCAC: Partial<ChartOptions>;
  siteCAC: Partial<ChartOptions>;
  saleSatisfaction: Partial<ChartOptions>;
  trafficCAC: Partial<ChartOptions>;
  view1CAC: Partial<ChartOptions>;
  view2CAC: Partial<ChartOptions>;
  timeCAC: Partial<ChartOptions>;
  customerCAC: Partial<ChartOptions>;
  conversionsCAC: Partial<ChartOptions>;
  saleCAC: Partial<ChartOptions>;
  revenueCAC: Partial<ChartOptions>;
  marketCAC: Partial<ChartOptions>;
  typeCAC: Partial<ChartOptions>;
  trafficMonitorCAC: Partial<ChartOptions>;
  supportCAC: Partial<ChartOptions>;
  average1CAC: Partial<ChartOptions>;
  average2CAC: Partial<ChartOptions>;
  average3CAC: Partial<ChartOptions>;
  average4CAC: Partial<ChartOptions>;
  // eslint-disable-next-line
  chartDB: any;

  // public  props
  // chartDB;
  taskRate: number;

  intervalSub: string | number | NodeJS.Timeout | undefined;
  intervalMain: string | number | NodeJS.Timeout | undefined;

  themeSub = new Subscription();

  // constructor
  constructor(private themeService: ThemeService) {
    this.chartDB = ChartDB;
    const {
      chartOption,
      chartOptions_1,
      analyticsSeoCard,
      chartSeoCard,
      chartUniqueVisitor,
      chartStatistics,
      chartProcessCompliance,
      chartUser1,
      chartUser2,
      chartUser3,
      chartAmount1,
      chartAmount2,
      chartAmount3,
      chartAmount4,
      completedTicketCAC,
      transactions1CAC,
      transactions2CAC,
      storageCAC,
      accountCAC,
      percentageCAC,
      deviceCAC,
      analyticsUser,
      analyticsBounceRate,
      analyticsAvgSession,
      analyticsPageSession,
      analyticsPageView,
      analyticsSession,
      timeUserCAC,
      horizontalBarCAC,
      conversionsBarCAC,
      saleSatisfaction,
      siteCAC,
      trafficCAC,
      view1CAC,
      view2CAC,
      timeCAC,
      customerCAC,
      conversionsCAC,
      saleCAC,
      revenueCAC,
      marketCAC,
      typeCAC,
      supportCAC,
      trafficMonitorCAC,
      average1CAC,
      average2CAC,
      average3CAC,
      average4CAC
    } = this.chartDB;
    this.chartOptions = chartOption;
    this.chartOptions_1 = chartOptions_1;
    this.analyticsSeoCard = analyticsSeoCard;
    this.chartSeoCard = chartSeoCard;
    this.chartUniqueVisitor = chartUniqueVisitor;
    this.chartStatistics = chartStatistics;
    this.chartProcessCompliance = chartProcessCompliance;
    this.chartUser1 = chartUser1;
    this.chartUser2 = chartUser2;
    this.chartUser3 = chartUser3;
    this.chartAmount1 = chartAmount1;
    this.chartAmount2 = chartAmount2;
    this.chartAmount3 = chartAmount3;
    this.chartAmount4 = chartAmount4;
    this.completedTicketCAC = completedTicketCAC;
    this.transactions1CAC = transactions1CAC;
    this.transactions2CAC = transactions2CAC;
    this.storageCAC = storageCAC;
    this.accountCAC = accountCAC;
    this.percentageCAC = percentageCAC;
    this.deviceCAC = deviceCAC;
    this.analyticsUser = analyticsUser;
    this.analyticsBounceRate = analyticsBounceRate;
    this.analyticsAvgSession = analyticsAvgSession;
    this.analyticsPageSession = analyticsPageSession;
    this.analyticsPageView = analyticsPageView;
    this.analyticsSession = analyticsSession;
    this.timeUserCAC = timeUserCAC;
    this.horizontalBarCAC = horizontalBarCAC;
    this.conversionsBarCAC = conversionsBarCAC;
    this.siteCAC = siteCAC;
    this.saleSatisfaction = saleSatisfaction;
    this.trafficCAC = trafficCAC;
    this.view1CAC = view1CAC;
    this.view2CAC = view2CAC;
    this.timeCAC = timeCAC;
    (this.customerCAC = customerCAC), (this.conversionsCAC = conversionsCAC);
    this.saleCAC = saleCAC;
    this.revenueCAC = revenueCAC;
    this.marketCAC = marketCAC;
    this.typeCAC = typeCAC;
    this.trafficMonitorCAC = trafficMonitorCAC;
    this.supportCAC = supportCAC;
    this.average1CAC = average1CAC;
    this.average2CAC = average2CAC;
    this.average3CAC = average3CAC;
    this.average4CAC = average4CAC;
    this.taskRate = 10;
  }

  ngOnInit(): void {
    this.themeSub = this.themeService.isDarkTheme.subscribe((isDark: string) => {
      const tooltipTheme = isDark === 'dark' ? 'dark' : 'light';
      const tooltip = { theme: tooltipTheme };
      this.chartOptions = { ...this.chartOptions, tooltip };
      this.analyticsSeoCard = { ...this.analyticsSeoCard, tooltip };
      this.chartSeoCard = { ...this.chartSeoCard, tooltip };
      this.chartUniqueVisitor = { ...this.chartUniqueVisitor, tooltip };
      this.chartStatistics = { ...this.chartStatistics, tooltip };
      this.chartProcessCompliance = { ...this.chartProcessCompliance, tooltip };
      this.chartUser1 = { ...this.chartUser1, tooltip };
      this.chartUser2 = { ...this.chartUser2, tooltip };
      this.chartUser3 = { ...this.chartUser3, tooltip };
      this.completedTicketCAC = { ...this.completedTicketCAC, tooltip };
      this.transactions1CAC = { ...this.transactions1CAC, tooltip };
      this.transactions2CAC = { ...this.transactions2CAC, tooltip };
      this.storageCAC = { ...this.storageCAC, tooltip };
      this.percentageCAC = { ...this.percentageCAC, tooltip };
      this.accountCAC = { ...this.accountCAC, tooltip };
      this.analyticsUser = { ...this.analyticsUser, tooltip };
      this.analyticsSession = { ...this.analyticsSession, tooltip };
      this.analyticsPageView = { ...this.analyticsPageView, tooltip };
      this.analyticsPageSession = { ...this.analyticsPageSession, tooltip };
      this.analyticsAvgSession = { ...this.analyticsAvgSession, tooltip };
      this.analyticsBounceRate = { ...this.analyticsBounceRate, tooltip };
      this.timeUserCAC = { ...this.timeUserCAC, tooltip };
      this.horizontalBarCAC = { ...this.horizontalBarCAC, tooltip };
      this.conversionsBarCAC = { ...this.conversionsBarCAC, tooltip };
      this.siteCAC = { ...this.siteCAC, tooltip };
      this.view1CAC = { ...this.view1CAC, tooltip };
      this.view2CAC = { ...this.view2CAC, tooltip };
      this.timeCAC = { ...this.timeCAC, tooltip };
      this.conversionsCAC = { ...this.conversionsCAC, tooltip };
      this.saleCAC = { ...this.saleCAC, tooltip };
      this.marketCAC = { ...this.marketCAC, tooltip };
      this.trafficMonitorCAC = { ...this.trafficMonitorCAC, tooltip };
      this.supportCAC = { ...this.supportCAC, tooltip };
      this.average1CAC = { ...this.average1CAC, tooltip };
      this.average2CAC = { ...this.average2CAC, tooltip };
    });
  }

  ngOnDestroy(): void {
    this.themeSub.unsubscribe();
  }
}
