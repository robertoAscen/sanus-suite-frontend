// Angular Import
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartDB } from 'src/app/fack-db/chartData';
import { ThemeService } from 'src/app/theme/shared/service/customs-theme.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexStroke,
  ApexLegend,
  ApexTooltip,
  ApexTheme,
  ApexResponsive
} from 'ng-apexcharts';

// rxjs
import { Subscription } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  theme: ApexTheme;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-hd-dashboard',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule],
  templateUrl: './hd-dashboard.component.html',
  styleUrls: ['./hd-dashboard.component.scss']
})
export default class HdDashboardComponent implements OnInit, OnDestroy {
  // public props
  // eslint-disable-next-line
  chartDB: any;
  @ViewChild('chart') chart!: ChartComponent;
  support1HACC!: Partial<ChartOptions>;
  support2HACC!: Partial<ChartOptions>;
  support3HACC!: Partial<ChartOptions>;
  satisfactionHACC!: Partial<ChartOptions>;
  themeSub = new Subscription();

  // constructor
  constructor(private themeService: ThemeService) {
    this.chartDB = ChartDB;
    this.support1HACC = this.chartDB.support1HACC;
    this.support2HACC = this.chartDB.support2HACC;
    this.support3HACC = this.chartDB.support3HACC;
    this.satisfactionHACC = this.chartDB.satisfactionHACC;
  }

  ngOnInit() {
    this.themeSub = this.themeService.isDarkTheme.subscribe((isDark: string) => {
      const tooltipTheme = isDark === 'dark' ? 'dark' : 'light';
      const tooltip = { theme: tooltipTheme };
      this.support1HACC = { ...this.support1HACC, tooltip };
      this.support2HACC = { ...this.support2HACC, tooltip };
      this.support3HACC = { ...this.support3HACC, tooltip };
      this.satisfactionHACC = { ...this.satisfactionHACC, tooltip };
    });
  }

  ngOnDestroy() {
    this.themeSub.unsubscribe();
  }

  // public method

  source = [
    {
      title: 'Facebook Source',
      progressBar: [
        {
          value: '25',
          title: 'Page Profile'
        },
        {
          value: '85',
          title: 'Favorite'
        },
        {
          value: '65',
          title: 'Like Story'
        }
      ]
    },
    {
      title: 'Twitter Source',
      progressBar: [
        {
          value: '85',
          title: 'Wall Profile'
        },
        {
          value: '25',
          title: 'Favorite'
        },
        {
          value: '65',
          title: 'Like Tweets'
        }
      ]
    }
  ];
  chartValue = [
    {
      style: 'border-right',
      value: '10',
      status: 'Open'
    },
    {
      style: 'border-right',
      value: '5',
      status: 'Running'
    },
    {
      value: '3',
      status: 'Solved'
    }
  ];

  supportChart = [
    {
      style: 'border-right',
      value: '80',
      status: 'Starred'
    },
    {
      style: 'border-right',
      value: '3',
      status: 'Reopen'
    },
    {
      value: '14+',
      status: 'Reassigned'
    }
  ];

  activities = [
    {
      title: 'Development & Update',
      color: 'b-primary',
      background: 'text-c-blue'
    },
    {
      title: 'Showcases',
      color: 'b-primary',
      background: 'text-c-blue'
    },
    {
      title: 'Miscellaneous',
      color: 'b-success',
      background: 'text-c-green'
    },
    {
      title: 'Showcases',
      color: 'b-primary',
      background: 'text-c-blue'
    },
    {
      title: 'Miscellaneous',
      color: 'b-success',
      background: 'text-c-green'
    },
    {
      title: 'Development',
      color: 'b-primary',
      background: 'text-c-green'
    },
    {
      title: 'Showcases',
      color: 'b-primary',
      background: 'text-c-blue'
    }
  ];

  cards = [
    {
      icon: 'feather icon-star-on',
      background: 'widget-primary-card',
      title: '4000 +',
      text: 'Ratings Received'
    },
    {
      icon: 'fas fa-trophy',
      background: 'widget-purple-card',
      title: '17',
      text: 'Achievements'
    }
  ];
}
