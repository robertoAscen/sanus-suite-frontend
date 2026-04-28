// angular import
import { Component, OnInit, ViewChild } from '@angular/core';

// project import
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ThemeService } from 'src/app/theme/shared/service/customs-theme.service';
import { PlaceholderCard1Component } from 'src/app/theme/shared/components/placeholder-card/placeholder-1.component';

// third party import
import { NgApexchartsModule } from 'ng-apexcharts';

import {
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
  ApexMarkers,
  ApexTheme
} from 'ng-apexcharts';

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
  markers: ApexMarkers;
  theme: ApexTheme;
};

@Component({
  selector: 'app-dash-analytics',
  standalone: true,
  imports: [ProductSaleComponent, SharedModule, NgApexchartsModule, PlaceholderCard1Component],
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss']
})
export default class DashAnalyticsComponent implements OnInit {
  // public props
  @ViewChild('statisticsChart') statisticsChart!: ChartComponent;
  @ViewChild('customerChart') customerChart!: ChartComponent;
  @ViewChild('customerChart2') customerChart2!: ChartComponent;
  @ViewChild('conversionsChart1') conversionsChart1!: ChartComponent;
  @ViewChild('conversionsChart2') conversionsChart2!: ChartComponent;
  @ViewChild('conversionsChart3') conversionsChart3!: ChartComponent;
  @ViewChild('seoChart') seoChart!: ChartComponent;
  statistics_chart!: Partial<ChartOptions>;
  customer_chart!: Partial<ChartOptions>;
  customChart_2!: Partial<ChartOptions>;
  seo_Chart!: Partial<ChartOptions>;
  conversion1!: Partial<ChartOptions>;
  conversion2!: Partial<ChartOptions>;
  conversion3!: Partial<ChartOptions>;

  statisticsChartColors = ['#73b4ff', '#59e0c5'];
  customerChartColors = ['#4680ff', '#2ed8b6'];
  customerChartColors2 = ['#fff', '#2ed8b6'];
  seoChartColor = ['#ff5370'];
  conversion1Color = ['#73b4ff'];
  conversion2Color = ['#59e0c5'];
  conversion3Color = ['#ff869a'];

  // constructor
  constructor(public theme: ThemeService) {
    this.statistics_chart = {
      chart: {
        height: 205,
        type: 'line',
        toolbar: {
          show: false
        },
        background: 'transparent'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      series: [
        {
          name: 'Arts',
          data: [20, 50, 30, 60, 30, 50]
        },
        {
          name: 'Commerce',
          data: [60, 30, 65, 45, 67, 35]
        }
      ],
      legend: {
        position: 'top'
      },
      xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        show: true,
        min: 10,
        max: 70
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#4099ff', '#2ed8b6'],
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      grid: {
        borderColor: '#cccccc3b'
      },
      theme: {
        mode: 'light'
      }
    };
    this.customer_chart = {
      chart: {
        height: 150,
        type: 'donut',
        background: 'transparent'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%'
          }
        }
      },
      labels: ['New', 'Return'],
      series: [39, 10],
      legend: {
        show: false
      },
      tooltip: {
        theme: 'dark'
      },
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      fill: {
        opacity: [1, 1]
      },
      stroke: {
        width: 0
      },
      theme: {
        mode: 'dark'
      }
    };
    this.customChart_2 = {
      chart: {
        height: 150,
        type: 'donut',
        background: 'transparent'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%'
          }
        }
      },
      labels: ['New', 'Return'],
      series: [20, 15],
      legend: {
        show: false
      },
      tooltip: {
        theme: 'dark'
      },
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      fill: {
        opacity: [1, 1]
      },
      stroke: {
        width: 0
      },
      theme: {
        mode: 'light'
      }
    };
    this.seo_Chart = {
      chart: {
        type: 'area',
        height: 145,
        sparkline: {
          enabled: true
        },
        background: 'transparent'
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#ff869a'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 0.8,
          stops: [0, 100, 100, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          data: [45, 35, 60, 50, 85, 70]
        }
      ],
      yaxis: {
        min: 5,
        max: 90
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      },
      theme: {
        mode: 'light'
      }
    };
    this.conversion1 = {
      chart: {
        type: 'bar',
        height: 65,
        sparkline: {
          enabled: true
        },
        background: 'transparent'
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0,
          gradientToColors: ['#4099ff'],
          inverseColors: true,
          opacityFrom: 0.99,
          opacityTo: 0.99,
          stops: [0, 100]
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [
        {
          data: [
            25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89,
            63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54
          ]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      },
      theme: {
        mode: 'light'
      }
    };
    this.conversion2 = {
      chart: {
        type: 'bar',
        height: 65,
        sparkline: {
          enabled: true
        },
        background: 'transparent'
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0,
          gradientToColors: ['#2ed8b6'],
          inverseColors: true,
          opacityFrom: 0.99,
          opacityTo: 0.99,
          stops: [0, 100]
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [
        {
          data: [
            25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89,
            63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54
          ]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      },
      theme: {
        mode: 'light'
      }
    };
    this.conversion3 = {
      chart: {
        type: 'bar',
        height: 65,
        sparkline: {
          enabled: true
        },
        background: 'transparent'
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0,
          gradientToColors: ['#ff5370'],
          inverseColors: true,
          opacityFrom: 0.99,
          opacityTo: 0.99,
          stops: [0, 100]
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [
        {
          data: [
            25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89,
            63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54
          ]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      },
      theme: {
        mode: 'light'
      }
    };
  }

  ngOnInit() {
    this.theme.isDarkTheme.subscribe((themeMode: string) => {
      this.statistics_chart.theme!.mode = themeMode === 'dark' ? 'dark' : 'light';
      this.customer_chart.theme!.mode = themeMode === 'dark' ? 'dark' : 'light';
      this.customChart_2.theme!.mode = themeMode === 'dark' ? 'dark' : 'light';
      this.seo_Chart.theme!.mode = themeMode === 'dark' ? 'dark' : 'light';
      this.conversion1.theme!.mode = themeMode === 'dark' ? 'dark' : 'light';
      this.conversion2.theme!.mode = themeMode === 'dark' ? 'dark' : 'light';
      this.conversion3.theme!.mode = themeMode === 'dark' ? 'dark' : 'light';
      this.statisticsChartColors = ['#73b4ff', '#59e0c5'];
      this.customerChartColors = ['#4680ff', '#2ed8b6'];
      this.customerChartColors2 = ['#fff', '#2ed8b6'];
      this.seoChartColor = ['#ff5370'];
      this.conversion1Color = ['#73b4ff'];
      this.conversion2Color = ['#59e0c5'];
      this.conversion3Color = ['#ff869a'];
    });
  }

  // public method
  cards = [
    {
      background: 'bg-c-blue',
      title: 'Orders Received',
      icon: 'icon-shopping-cart',
      text: 'Completed Orders',
      number: '486',
      no: '351'
    },
    {
      background: 'bg-c-green',
      title: 'Total Sales',
      icon: 'icon-tag',
      text: 'This Month',
      number: '1641',
      no: '213'
    },
    {
      background: 'bg-c-yellow',
      title: 'Revenue',
      icon: 'icon-repeat',
      text: 'This Month',
      number: '$42,56',
      no: '$5,032'
    },
    {
      background: 'bg-c-red',
      title: 'Total Profit',
      icon: 'icon-shopping-cart',
      text: 'This Month',
      number: '$9,562',
      no: '$542'
    }
  ];

  images = [
    {
      src: 'assets/images/gallery-grid/img-grd-gal-1.jpg',
      title: 'Old Scooter',
      size: 'PNG-100KB'
    },
    {
      src: 'assets/images/gallery-grid/img-grd-gal-2.jpg',
      title: 'Wall Art',
      size: 'PNG-150KB'
    },
    {
      src: 'assets/images/gallery-grid/img-grd-gal-3.jpg',
      title: 'Microphone',
      size: 'PNG-150KB'
    }
  ];
}
