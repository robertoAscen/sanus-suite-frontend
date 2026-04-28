import { data } from './series-data';
import { candlestick_data } from './candlestick-data';

export class ChartDB {
  static chartOption = {
    chart: {
      height: 200,
      type: 'line',
      toolbar: {
        show: false
      }
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
        data: [20, 50, 30, 60, 30, 50, 40]
      },
      {
        name: 'Commerce',
        data: [60, 30, 65, 45, 67, 35, 68]
      },
      {
        name: 'Science',
        data: [40, 20, 50, 15, 40, 65, 20]
      }
    ],
    xaxis: {
      type: 'datetime',
      categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000']
    },
    colors: ['#73b4ff', '#59e0c5', '#ff869a'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        gradientToColors: ['#4099ff', '#2ed8b6', '#ff5370'],
        shadeIntensity: 0.5,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    markers: {
      size: 5,
      colors: ['#4099ff', '#2ed8b6', '#ff5370'],
      strokeWidth: 2,
      hover: {
        size: 7
      }
    },
    yaxis: {
      min: 10,
      max: 70
    },
    tooltip: {
      theme: 'light'
    }
  };
  static chartOptions_1 = {
    chart: {
      height: 200,
      type: 'donut'
    },
    dataLabels: {
      enabled: false
    },
    series: [85.7, 77.56, 20.9],
    colors: ['#4099ff', '#ff5370', '#2ed8b6'],
    labels: ['Send', 'Open', 'Bounced'],
    legend: {
      show: true,
      position: 'bottom'
    }
  };
  static analyticsSeoCard = {
    chart: {
      type: 'area',
      height: 145,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#ff5370'],
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
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      marker: {
        show: false
      }
    }
  };
  static chartSeoCard = {
    chart: {
      type: 'area',
      height: 120,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4099ff'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#4099ff'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 0.9,
        opacityTo: 0.5,
        stops: [0, 100, 100, 100]
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [
      {
        data: [40, 25, 60, 50, 75, 60]
      }
    ],
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static chartUniqueVisitor = {
    chart: {
      type: 'bar',
      height: 220,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#fff'],
    plotOptions: {
      bar: {
        color: '#fff',
        columnWidth: '80%'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.25,
        gradientToColors: ['#fff'],
        inverseColors: true,
        opacityFrom: 0.99,
        opacityTo: 0.65,
        stops: [0, 100]
      }
    },
    series: [
      {
        data: [
          25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63,
          25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54
        ]
      }
    ],
    xaxis: {
      crosshairs: {
        width: 1
      },
      labels: {
        show: true,
        style: {
          colors: '#fff'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          color: '#fff'
        }
      }
    },
    grid: {
      borderColor: '#ffffff3b'
    },
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static chartStatistics = {
    chart: {
      height: 195,
      type: 'line',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    series: [
      {
        name: 'Arts',
        data: [20, 50, 30, 60, 30, 65, 30]
      },
      {
        name: 'Science',
        data: [40, 20, 50, 15, 45, 30, 60]
      }
    ],
    xaxis: {
      type: 'datetime',
      categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000']
    },
    colors: ['#73b4ff', '#ff869a'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        gradientToColors: ['#4099ff', '#ff5370'],
        shadeIntensity: 0.5,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    markers: {
      size: 5,
      colors: ['#4099ff', '#ff5370'],
      opacity: 0.9,
      strokeWidth: 2,
      hover: {
        size: 7
      }
    },
    yaxis: {
      min: 10,
      max: 70
    },
    tooltip: {
      theme: 'light'
    }
  };
  static chartProcessCompliance = {
    chart: {
      height: 200,
      type: 'bar',
      sparkline: {
        enabled: true
      }
    },
    colors: ['#4099ff', '#2ed8b6', '#ff5370'],
    plotOptions: {
      bar: {
        columnWidth: '55%',
        distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 0
    },
    series: [
      {
        name: 'Requests',
        data: [66.6, 29.7, 32.8]
      }
    ],
    xaxis: {
      categories: ['Desktop', 'Tablet', 'Mobile']
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.25,
        gradientToColors: ['#4099ff', '#2ed8b6', '#ff5370'],
        inverseColors: true,
        opacityFrom: 0.99,
        opacityTo: 0.65,
        stops: [0, 100]
      }
    },
    tooltip: {
      theme: 'light'
    }
  };
  static chartUser1 = {
    chart: {
      height: 150,
      type: 'area',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3,
      curve: 'straight'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#4099ff'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 0.9,
        opacityTo: 0.5,
        stops: [0, 100, 100, 100]
      }
    },
    yaxis: {
      labels: {
        show: true,
        maxWidth: 20
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    },
    colors: ['#4099ff'],
    series: [
      {
        name: 'Hour.',
        data: [0, 30, 10, 45, 30, 55, 30, 50]
      }
    ],
    grid: {
      row: {
        opacity: 0.5
      }
    },
    tooltip: {
      theme: 'light'
    }
  };
  static chartUser2 = {
    chart: {
      height: 150,
      type: 'area',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    tooltip: {
      theme: 'light'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3,
      curve: 'straight'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#2ed8b6'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 0.9,
        opacityTo: 0.5,
        stops: [0, 100, 100, 100]
      }
    },
    yaxis: {
      labels: {
        show: true,
        maxWidth: 20
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    },
    colors: ['#2ed8b6'],
    series: [
      {
        name: 'Hour.',
        data: [0, 30, 10, 45, 30, 55, 30, 50]
      }
    ],
    grid: {
      row: {
        opacity: 0.5
      }
    }
  };
  static chartUser3 = {
    chart: {
      height: 150,
      type: 'area',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    tooltip: {
      theme: 'light'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3,
      curve: 'straight'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#ffb64d'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 0.9,
        opacityTo: 0.5,
        stops: [0, 100, 100, 100]
      }
    },
    yaxis: {
      labels: {
        show: true,
        maxWidth: 20
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    },
    colors: ['#ffb64d'],
    series: [
      {
        name: 'Hour.',
        data: [0, 30, 10, 45, 30, 55, 30, 50]
      }
    ],
    grid: {
      row: {
        opacity: 0.5
      }
    }
  };
  static chartAmount1 = {
    chart: {
      type: 'area',
      height: 90,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FFF'],
    fill: {
      type: 'solid',
      opacity: 1
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [
      {
        name: 'series1',
        data: [65, 45, 60, 40, 80]
      }
    ],
    yaxis: {
      min: 0,
      max: 80
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static chartAmount2 = {
    chart: {
      type: 'area',
      height: 90,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FFF'],
    fill: {
      type: 'solid',
      opacity: 1
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [
      {
        name: 'series1',
        data: [80, 40, 60, 45, 65]
      }
    ],
    yaxis: {
      min: 0,
      max: 80
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static chartAmount3 = {
    chart: {
      type: 'area',
      height: 90,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FFF'],
    fill: {
      type: 'solid',
      opacity: 1
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [
      {
        name: 'series1',
        data: [65, 45, 60, 40, 80]
      }
    ],
    yaxis: {
      min: 0,
      max: 80
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static chartAmount4 = {
    chart: {
      type: 'area',
      height: 90,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FFF'],
    fill: {
      type: 'solid',
      opacity: 1
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [
      {
        name: 'series1',
        data: [80, 40, 60, 45, 65]
      }
    ],
    yaxis: {
      min: 0,
      max: 80
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static completedTicketCAC = {
    chart: {
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    series: [
      {
        data: [45, 66, 41, 89, 25, 44, 9, 54]
      }
    ],
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static transactions1CAC = {
    chart: {
      type: 'bar',
      height: 60,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4099ff'],
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    series: [
      {
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
      }
    ],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      marker: {
        show: false
      }
    }
  };
  static transactions2CAC = {
    chart: {
      type: 'bar',
      height: 65,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FF5370'],
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    series: [
      {
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
      }
    ],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      marker: {
        show: false
      }
    }
  };
  static storageCAC = {
    chart: {
      type: 'area',
      height: 95,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4099ff', '#00bcd4'],
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [
      {
        name: 'Storage',
        data: [100, 40, 28, 51, 42, 109, 100]
      },
      {
        name: 'Bandwidth',
        data: [41, 109, 45, 109, 34, 52, 41]
      }
    ],
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      marker: {
        show: false
      }
    }
  };
  static accountCAC = {
    chart: {
      type: 'area',
      height: 215,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4099ff', '#0e9e4a', '#FF5370'],
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [
      {
        name: 'series1',
        data: [20, 90, 65, 85, 20, 80, 30]
      },
      {
        name: 'series2',
        data: [70, 30, 40, 15, 60, 40, 95]
      }
    ],
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static percentageCAC = {
    chart: {
      height: 120,
      type: 'bar',
      sparkline: {
        enabled: true
      }
    },
    colors: ['#4099ff', '#0e9e4a', '#FF5370'],
    plotOptions: {
      bar: {
        columnWidth: '55%',
        distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 0
    },
    series: [
      {
        name: 'Requests',
        data: [66.6, 29.7, 32.8]
      }
    ],
    xaxis: {
      categories: ['Desktop', 'Tablet', 'Mobile']
    },
    tooltip: {
      theme: 'light'
    }
  };
  static deviceCAC = {
    chart: {
      height: 135,
      type: 'donut',
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [66.6, 29.7, 38.6],
    labels: ['Desktop', 'Mobile', 'Tablet'],
    grid: {
      padding: {
        top: 20,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    legend: {
      show: false
    }
  };
  static analyticsUser = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.5,
        type: 'horizontal',
        opacityFrom: 0.5,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    series: [
      {
        data: [3, 0, 1, 2, 1, 1, 2]
      }
    ],
    yaxis: {
      min: -2,
      max: 5
    },
    tooltip: {
      theme: 'light',
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
    colors: ['#ffb64d']
  };
  static analyticsSession = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.5,
        type: 'horizontal',
        opacityFrom: 0.5,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    series: [
      {
        data: [2, 1, 2, 1, 1, 3, 0]
      }
    ],
    yaxis: {
      min: -3,
      max: 5
    },
    tooltip: {
      theme: 'light',
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
    colors: ['#dc6788']
  };
  static analyticsPageView = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.5,
        type: 'horizontal',
        opacityFrom: 0.5,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    series: [
      {
        data: [3, 0, 1, 2, 1, 1, 2]
      }
    ],
    yaxis: {
      min: -3,
      max: 5
    },
    tooltip: {
      theme: 'light',
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
    colors: ['#FF5370']
  };
  static analyticsPageSession = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.5,
        type: 'horizontal',
        opacityFrom: 0.5,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    series: [
      {
        data: [2, 1, 2, 1, 1, 3, 0]
      }
    ],
    yaxis: {
      min: -3,
      max: 5
    },
    tooltip: {
      theme: 'light',
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
    colors: ['#7759de']
  };
  static analyticsAvgSession = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.5,
        type: 'horizontal',
        opacityFrom: 0.5,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    series: [
      {
        data: [3, 0, 1, 2, 1, 1, 2]
      }
    ],
    yaxis: {
      min: -3,
      max: 5
    },
    tooltip: {
      theme: 'light',
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
    colors: ['#4099ff']
  };
  static analyticsBounceRate = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.5,
        type: 'horizontal',
        opacityFrom: 0.5,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    series: [
      {
        data: [2, 1, 2, 1, 1, 3, 0]
      }
    ],
    yaxis: {
      min: -3,
      max: 5
    },
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      }
    }
  };
  static timeUserCAC = {
    chart: {
      height: 400,
      type: 'heatmap'
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4099ff'],
    series: [
      {
        name: 'Metric1',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric2',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric3',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric4',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric5',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric6',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric7',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric8',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric9',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric10',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric11',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric12',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric13',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric14',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      }
    ],
    tooltip: {
      theme: 'light'
    }
  };
  static horizontalBarCAC = {
    chart: {
      height: 350,
      type: 'bar'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top'
        }
      }
    },
    colors: ['#4099ff', '#0e9e4a', '#FF5370'],
    dataLabels: {
      enabled: false,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    series: [
      {
        name: 'India',
        data: [44, 55, 41, 64, 22]
      },
      {
        name: 'Japan',
        data: [53, 32, 33, 52, 13]
      },
      {
        name: 'London',
        data: [44, 33, 52, 13, 22]
      }
    ],
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005]
    },
    tooltip: {
      theme: 'light'
    }
  };
  static conversionsBarCAC = {
    chart: {
      type: 'bar',
      height: 85,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4099ff'],
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    series: [
      {
        data: [
          25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63,
          25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54
        ]
      }
    ],
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static siteCAC = {
    chart: {
      type: 'line',
      height: 150,
      sparkline: {
        enabled: true
      }
    },
    tooltip: {
      theme: 'light'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 3
    },
    series: [
      {
        data: [135, 187, 180, 222, 185, 195, 158]
      }
    ],
    yaxis: {
      min: 100
    },
    colors: ['#4099ff']
  };
  static saleSatisfaction = {
    chart: {
      height: 260,
      type: 'pie'
    },
    series: [66, 50, 40, 30],
    labels: ['extremely Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
    legend: {
      show: true,
      offsetY: 50
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#4099ff'
      }
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 320
          },
          legend: {
            position: 'bottom',
            offsetY: 0
          }
        }
      }
    ]
  };
  static trafficCAC = {
    chart: {
      height: 300,
      type: 'donut'
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false
      }
    },
    series: [85.7, 77.56, 20.9, 10.9, 15.8, 86.7],
    colors: ['#4099ff', '#0e9e4a', '#00acc1', '#FFB64D', '#FF5370', '#7759de'],
    labels: ['Facebook ads', 'Amazon ads', 'Youtube videos', 'Google adsense', 'Twitter ads', 'News ads'],
    legend: {
      show: true,
      position: 'bottom'
    }
  };
  static view1CAC = {
    chart: {
      type: 'area',
      height: 87,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FF5370'],
    stroke: {
      curve: 'straight',
      width: 3
    },
    series: [
      {
        name: 'series1',
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89]
      }
    ],
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      marker: {
        show: false
      }
    }
  };
  static view2CAC = {
    chart: {
      type: 'area',
      height: 87,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#00acc1'],
    stroke: {
      curve: 'smooth',
      width: 3
    },
    series: [
      {
        name: 'series1',
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
      }
    ],
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static timeCAC = {
    chart: {
      height: 225,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3,
      curve: 'straight'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    colors: ['#0e9e4a'],
    series: [
      {
        name: 'Hour.',
        data: [10, 41, 35, 51, 49, 52, 58, 71, 89]
      }
    ],
    grid: {
      row: {
        colors: ['#f3f6ff', 'transparent'],
        opacity: 0.5
      }
    },
    tooltip: {
      theme: 'light'
    }
  };
  static customerCAC = {
    chart: {
      height: 200,
      type: 'donut'
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%'
        }
      }
    },
    labels: ['New', 'Return', 'Custom'],
    series: [76.7, 15, 30],
    legend: {
      show: false
    },
    grid: {
      padding: {
        top: 20,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    colors: ['#4099ff', '#0e9e4a', '#FF5370']
  };
  static conversionsCAC = {
    chart: {
      type: 'bar',
      height: 65,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#00acc1'],
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    series: [
      {
        data: [
          25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63,
          25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54
        ]
      }
    ],
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static saleCAC = {
    chart: {
      type: 'bar',
      height: 220,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4099ff'],
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    series: [
      {
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25]
      }
    ],
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static revenueCAC = {
    chart: {
      height: 223,
      type: 'donut'
    },
    dataLabels: {
      enabled: false
    },
    labels: ['Target', 'Last week', 'Last day'],
    series: [1258, 975, 500],
    legend: {
      show: false
    },
    colors: ['#00acc1', '#FFB64D', '#4099ff']
  };
  static marketCAC = {
    chart: {
      height: 200,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#E0291D', '#3C5A99', '#42C0FB'],
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    series: [
      {
        name: 'Youtube',
        data: [44, 50, 41, 67, 22, 43, 44, 50, 41, 52, 22, 43]
      },
      {
        name: 'Facebook',
        data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
      },
      {
        name: 'Twitter',
        data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
      }
    ],
    xaxis: {
      type: 'datetime',
      categories: [
        '01/01/2011 GMT',
        '01/02/2011 GMT',
        '01/03/2011 GMT',
        '01/04/2011 GMT',
        '01/05/2011 GMT',
        '01/06/2011 GMT',
        '01/07/2011 GMT',
        '01/08/2011 GMT',
        '01/09/2011 GMT',
        '01/10/2011 GMT',
        '01/11/2011 GMT',
        '01/12/2011 GMT'
      ]
    },
    legend: {
      show: false
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      theme: 'light'
    }
  };
  static typeCAC = {
    chart: {
      height: 235,
      type: 'donut'
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%'
        }
      }
    },
    labels: ['Desktop Computers', 'Smartphones', 'Tablets'],
    series: [76.7, 15, 30],
    legend: {
      show: false
    },
    colors: ['#FF5370', '#FFB64D', '#00acc1']
  };
  static trafficMonitorCAC = {
    chart: {
      type: 'bar',
      height: 400,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: true
    },
    colors: ['#4099ff'],
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: 0,
              to: 15,
              color: '#FF5370'
            },
            {
              from: 16,
              to: 30,
              color: '#FFB64D'
            },
            {
              from: 31,
              to: 50,
              color: '#4099ff'
            },
            {
              from: 51,
              to: 100,
              color: '#0e9e4a'
            }
          ]
        },
        columnWidth: '80%'
      }
    },
    series: [
      {
        data: [
          25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63,
          25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54
        ]
      }
    ],
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static supportCAC = {
    chart: {
      type: 'area',
      height: 95,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4099ff'],
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [
      {
        data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
      }
    ],
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static average1CAC = {
    chart: {
      type: 'area',
      height: 145,
      width: '100%',
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4099ff'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.4,
        stops: [0, 80, 100]
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [
      {
        name: 'series1',
        data: [40, 60, 35, 55, 35, 75, 50]
      }
    ],
    yaxis: {
      min: 0,
      max: 100
    },
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static average2CAC = {
    chart: {
      type: 'area',
      height: 145,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#0e9e4a'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.4,
        stops: [0, 90, 100]
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [
      {
        name: 'series1',
        data: [40, 55, 35, 75, 50, 90, 50]
      }
    ],
    yaxis: {
      min: 0,
      max: 100
    },
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static average3CAC = {
    chart: {
      type: 'area',
      height: 145,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FFF'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.4,
        stops: [0, 100]
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [
      {
        name: 'series1',
        data: [40, 60, 35, 70, 50]
      }
    ],
    yaxis: {
      min: 0,
      max: 100
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static average4CAC = {
    chart: {
      type: 'area',
      height: 145,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FFF'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.4,
        stops: [0, 100]
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [
      {
        name: 'series1',
        data: [65, 45, 60, 40, 80]
      }
    ],
    yaxis: {
      min: 0,
      max: 100
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static barChart = {
    chart: {
      height: 350,
      type: 'bar'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    colors: ['#0e9e4a', '#4099ff', '#FF5370'],
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63]
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91]
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52]
      }
    ],
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: string) {
          return '$ ' + val + ' thousands';
        }
      }
    }
  };
  static barStackedChart = {
    chart: {
      height: 350,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    series: [
      {
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43]
      },
      {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27]
      },
      {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14]
      },
      {
        name: 'PRODUCT D',
        data: [21, 7, 25, 13, 22, 8]
      }
    ],
    tooltip: {
      theme: 'light'
    },
    xaxis: {
      type: 'datetime',
      categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT']
    },
    colors: ['#4099ff', '#0e9e4a', '#FFB64D', '#FF5370'],
    fill: {
      opacity: 1
    }
  };
  static barHorizontalChart = {
    chart: {
      height: 350,
      type: 'bar'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top'
        }
      }
    },
    colors: ['#4099ff', '#0e9e4a'],
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
    },
    tooltip: {
      theme: 'light'
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    series: [
      {
        data: [44, 55, 41, 64, 22, 43, 21]
      },
      {
        data: [53, 32, 33, 52, 13, 44, 32]
      }
    ],
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
    }
  };
  static barHStackChart = {
    chart: {
      height: 350,
      type: 'bar',
      stacked: true,
      stackType: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    colors: ['#4099ff', '#00acc1', '#0e9e4a', '#FFB64D', '#FF5370'],
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    series: [
      {
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
      },
      {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
      },
      {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
      },
      {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
      },
      {
        name: 'Reborn Kid',
        data: [25, 12, 19, 32, 25, 24, 10]
      }
    ],
    title: {
      text: '100% Stacked Bar'
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014]
    },

    tooltip: {
      y: {
        formatter: function (val: string) {
          return val + 'K';
        }
      }
    },
    fill: {
      opacity: 1
    },

    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40
    }
  };
  static pieChart = {
    chart: {
      height: 320,
      type: 'pie'
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    series: [44, 55, 13, 43, 22],
    colors: ['#4099ff', '#0e9e4a', '#00acc1', '#FFB64D', '#FF5370'],
    legend: {
      show: true,
      position: 'bottom'
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };
  static donutChart = {
    chart: {
      height: 320,
      type: 'donut'
    },
    series: [44, 55, 41, 17, 15],
    legend: {
      show: true,
      position: 'bottom'
    },
    colors: ['#4099ff', '#0e9e4a', '#00acc1', '#FFB64D', '#FF5370'],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true
            },
            value: {
              show: true
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };
  static radialChart = {
    chart: {
      height: 350,
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%'
        }
      }
    },
    colors: ['#4099ff'],
    series: [70],
    labels: ['Cricket']
  };
  static customsAngleChart = {
    chart: {
      height: 350,
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        offsetY: -30,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            show: false
          }
        }
      }
    },
    series: [76, 67, 61, 90],
    colors: ['#4099ff', '#0e9e4a', '#FFB64D', '#FF5370'],
    labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX: 0,
      offsetY: 0,
      labels: {
        useSeriesColors: true
      },
      formatter: function (
        seriesName: string,
        opts: { w: { globals: { series: { [x: string]: string } } }; seriesIndex: string | number }
      ) {
        return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        horizontal: 1
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false
          }
        }
      }
    ]
  };
  static lineChart = {
    chart: {
      height: 300,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    tooltip: {
      theme: 'light'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    colors: ['#4099ff'],
    series: [
      {
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f6ff', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
  };
  static realTimeChart = {
    chart: {
      height: 300,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5]
    },
    colors: ['#52c41a', '#faad14', '#ff4d4f'],
    series: [
      {
        name: 'Session Duration',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
      {
        name: 'Page Views',
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
      {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      }
    ],
    title: {
      text: 'Page Statistics',
      align: 'left'
    },
    markers: {
      size: 0,

      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan']
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: (val: string) => val + ' (mins)'
          }
        },
        {
          title: {
            formatter: (val: string) => val + ' per session'
          }
        },
        {
          title: {
            formatter: (val: string) => val
          }
        }
      ]
    },
    grid: {
      borderColor: '#f1f1f1'
    }
  };
  static areaChart = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    colors: ['#FFB64D', '#FF5370'],
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ],

    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00',
        '2018-09-19T01:30:00',
        '2018-09-19T02:30:00',
        '2018-09-19T03:30:00',
        '2018-09-19T04:30:00',
        '2018-09-19T05:30:00',
        '2018-09-19T06:30:00'
      ]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    }
  };
  static dateTimeChart = {
    series: [
      {
        name: 'visitor',
        data: data
      }
    ],
    chart: {
      type: 'area',
      height: 350
    },
    annotations: {
      yaxis: [
        {
          y: 30,
          borderColor: '#999',
          label: {
            text: 'Support',
            style: {
              color: '#fff',
              background: '#00E396'
            }
          }
        }
      ],
      xaxis: [
        {
          x: new Date('14 Nov 2012').getTime(),
          borderColor: '#999',
          label: {
            text: 'Rally',
            style: {
              color: '#fff',
              background: '#775DD0'
            }
          }
        }
      ]
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime',
      min: new Date('01 Mar 2012').getTime(),
      tickAmount: 6
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
    colors: ['#4099ff']
  };
  static mixedChart = {
    chart: {
      height: 350,
      type: 'line'
    },
    series: [
      {
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      },
      {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }
    ],
    stroke: {
      width: [0, 4]
    },
    colors: ['#4099ff', '#ff4d4f'],
    title: {
      text: 'Traffic Sources'
    },
    tooltip: {
      theme: 'light'
    },
    labels: [
      '01 Jan 2001',
      '02 Jan 2001',
      '03 Jan 2001',
      '04 Jan 2001',
      '05 Jan 2001',
      '06 Jan 2001',
      '07 Jan 2001',
      '08 Jan 2001',
      '09 Jan 2001',
      '10 Jan 2001',
      '11 Jan 2001',
      '12 Jan 2001'
    ],
    xaxis: {
      type: 'datetime'
    },
    yaxis: [
      {
        title: {
          text: 'Website Blog'
        }
      },
      {
        opposite: true,
        title: {
          text: 'Social Media'
        }
      }
    ]
  };
  static lineAreaChart = {
    chart: {
      height: 350,
      type: 'line',
      stacked: false
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    colors: ['#4680FF'],
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    series: [
      {
        name: 'Facebook',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
      },
      {
        name: 'Vine',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      },
      {
        name: 'Dribbble',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }
    ],
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: [
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003'
    ],
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      title: {
        text: 'Points'
      },
      min: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y: number) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' views';
          }
          return y;
        }
      }
    }
  };
  static candlestickChart = {
    chart: {
      height: 350,
      type: 'candlestick'
    },
    series: [
      {
        data: candlestick_data
      }
    ],
    title: {
      text: 'CandleStick Chart',
      align: 'left'
    },
    colors: ['#52c41a', '#ff4d4f'],
    xaxis: {
      type: 'datetime'
    },
    tooltip: {
      theme: 'light'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  };
  static bubbleChart = {
    chart: {
      height: 350,
      type: 'bubble'
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: 'Bubble1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Bubble2',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Bubble3',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Bubble4',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }
    ],
    colors: ['#4099ff', '#52c41a', '#faad14', '#ff4d4f'],
    fill: {
      opacity: 0.8
    },
    xaxis: {
      tickAmount: 12,
      type: 'category'
    },
    yaxis: {
      max: 70
    },
    tooltip: {
      theme: 'light'
    }
  };
  static bubble3DChart = {
    chart: {
      height: 350,
      type: 'bubble'
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: 'Product1',
        data: generateData3D(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Product2',
        data: generateData3D(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Product3',
        data: generateData3D(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Product4',
        data: generateData3D(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }
    ],
    fill: {
      type: 'gradient'
    },
    colors: ['#4099ff', '#52c41a', '#faad14', '#ff4d4f'],
    xaxis: {
      tickAmount: 12,
      type: 'datetime',

      labels: {
        rotate: 0
      }
    },
    yaxis: {
      max: 70
    },
    tooltip: {
      theme: 'light'
    },
    theme: {
      palette: 'palette2'
    }
  };
  static scatterChart = {
    chart: {
      height: 350,
      type: 'scatter',
      zoom: {
        enabled: true,
        type: 'xy'
      }
    },
    colors: ['#4099ff', '#52c41a', '#ff4d4f', '#faad14', '#13c2c2'],
    series: [
      {
        name: 'SAMPLE A',
        data: [
          [16.4, 5.4],
          [21.7, 2],
          [25.4, 3],
          [19, 2],
          [10.9, 1],
          [13.6, 3.2],
          [10.9, 7.4],
          [10.9, 0],
          [10.9, 8.2],
          [16.4, 0],
          [16.4, 1.8],
          [13.6, 0.3],
          [13.6, 0],
          [29.9, 0],
          [27.1, 2.3],
          [16.4, 0],
          [13.6, 3.7],
          [10.9, 5.2],
          [16.4, 6.5],
          [10.9, 0],
          [24.5, 7.1],
          [10.9, 0],
          [8.1, 4.7],
          [19, 0],
          [21.7, 1.8],
          [27.1, 0],
          [24.5, 0],
          [27.1, 0],
          [29.9, 1.5],
          [27.1, 0.8],
          [22.1, 2]
        ]
      },
      {
        name: 'SAMPLE B',
        data: [
          [36.4, 13.4],
          [1.7, 11],
          [5.4, 8],
          [9, 17],
          [1.9, 4],
          [3.6, 12.2],
          [1.9, 14.4],
          [1.9, 9],
          [1.9, 13.2],
          [1.4, 7],
          [6.4, 8.8],
          [3.6, 4.3],
          [1.6, 10],
          [9.9, 2],
          [7.1, 15],
          [1.4, 0],
          [3.6, 13.7],
          [1.9, 15.2],
          [6.4, 16.5],
          [0.9, 10],
          [4.5, 17.1],
          [10.9, 10],
          [0.1, 14.7],
          [9, 10],
          [12.7, 11.8],
          [2.1, 10],
          [2.5, 10],
          [27.1, 10],
          [2.9, 11.5],
          [7.1, 10.8],
          [2.1, 12]
        ]
      },
      {
        name: 'SAMPLE C',
        data: [
          [21.7, 3],
          [23.6, 3.5],
          [24.6, 3],
          [29.9, 3],
          [21.7, 20],
          [23, 2],
          [10.9, 3],
          [28, 4],
          [27.1, 0.3],
          [16.4, 4],
          [13.6, 0],
          [19, 5],
          [22.4, 3],
          [24.5, 3],
          [32.6, 3],
          [27.1, 4],
          [29.6, 6],
          [31.6, 8],
          [21.6, 5],
          [20.9, 4],
          [22.4, 0],
          [32.6, 10.3],
          [29.7, 20.8],
          [24.5, 0.8],
          [21.4, 0],
          [21.7, 6.9],
          [28.6, 7.7],
          [15.4, 0],
          [18.1, 0],
          [33.4, 0],
          [16.4, 0]
        ]
      }
    ],
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter: function (val: string) {
          return parseFloat(val).toFixed(1);
        }
      }
    },
    yaxis: {
      tickAmount: 7
    }
  };
  static scatterDateTimeChart = {
    chart: {
      height: 350,
      type: 'scatter',
      zoom: {
        type: 'xy'
      }
    },
    series: [
      {
        name: 'TEAM 1',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'TEAM 2',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'TEAM 3',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'TEAM 4',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'TEAM 5',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
          min: 10,
          max: 60
        })
      }
    ],
    dataLabels: {
      enabled: false
    },
    colors: ['#4099ff', '#52c41a', '#ff4d4f', '#faad14', '#13c2c2'],
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    tooltip: {
      theme: 'light'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      max: 70
    }
  };
  static heatmapChart = {
    chart: {
      height: 350,
      type: 'heatmap'
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4099ff'],
    series: [
      {
        name: 'Metric1',
        data: generateDataHeatmap(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric2',
        data: generateDataHeatmap(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric3',
        data: generateDataHeatmap(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric4',
        data: generateDataHeatmap(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric5',
        data: generateDataHeatmap(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric6',
        data: generateDataHeatmap(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric7',
        data: generateDataHeatmap(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric8',
        data: generateDataHeatmap(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric9',
        data: generateDataHeatmap(12, {
          min: 0,
          max: 90
        })
      }
    ],
    title: {
      text: 'HeatMap Chart (Single color)'
    },
    tooltip: {
      theme: 'light'
    }
  };
  static heatmapRoundedChart = {
    chart: {
      height: 350,
      type: 'heatmap'
    },
    stroke: {
      width: 0
    },
    tooltip: {
      theme: 'light'
    },
    plotOptions: {
      heatmap: {
        radius: 30,
        enableShades: false,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 50,
              color: '#faad14'
            },
            {
              from: 51,
              to: 100,
              color: '#ff4d4f'
            }
          ]
        }
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#fff']
      }
    },
    colors: ['#4099ff', '#13c2c2', '#52c41a', '#faad14', '#ff4d4f'],
    xaxis: {
      type: 'category'
    },
    title: {
      text: 'Rounded (Range without Shades)'
    },
    series: [
      {
        name: 'Metric1',
        data: generateDataRounded(15, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric2',
        data: generateDataRounded(15, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric3',
        data: generateDataRounded(15, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric4',
        data: generateDataRounded(15, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric5',
        data: generateDataRounded(15, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric6',
        data: generateDataRounded(15, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric7',
        data: generateDataRounded(15, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric8',
        data: generateDataRounded(15, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric8',
        data: generateDataRounded(15, {
          min: 0,
          max: 90
        })
      }
    ]
  };
  static support1HACC = {
    chart: {
      type: 'area',
      height: 100,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#7759de'],
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [
      {
        name: 'series1',
        data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
      }
    ],
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static support2HACC = {
    chart: {
      type: 'area',
      height: 100,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4099ff'],
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [
      {
        name: 'series1',
        data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
      }
    ],
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static support3HACC = {
    chart: {
      type: 'area',
      height: 100,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#11c15b'],
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [
      {
        name: 'series1',
        data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
      }
    ],
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },

      marker: {
        show: false
      }
    }
  };
  static satisfactionHACC = {
    chart: {
      height: 260,
      type: 'pie'
    },
    dataLabels: {
      enabled: false
    },
    series: [66, 50, 40, 30],
    labels: ['Very Poor', 'Satisfied', 'Very Satisfied', 'Poor'],
    legend: {
      show: true,
      offsetY: 50
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#4099ff'
      }
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 320
          },
          legend: {
            position: 'bottom',
            offsetY: 0
          }
        }
      }
    ]
  };
  static bar1CAC = {
    chart: {
      height: 350,
      type: 'bar'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#0e9e4a', '#4099ff', '#FF5370'],
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63]
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91]
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52]
      }
    ],
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      theme: 'light',
      y: {
        formatter: (val: string) => '$ ' + val + ' thousands'
      }
    }
  };
}

function generateDataSabraThat(count: number, yrange: { max: number; min: number }) {
  let i = 0;
  const series = [];
  while (i < count) {
    series.push({
      x: 'w' + (i + 1).toString(),
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    });
    i++;
  }
  return series;
}

function generateDayWiseTimeSeries(baseval: number, count: number, yrange: { min: number; max: number }) {
  let i = 0;
  const series = [];
  while (i < count) {
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([baseval, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

// bubble chart
function generateData(baseval: number, count: number, yrange: { max: number; min: number }) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}

// bubble chart 3D
function generateData3D(baseval: number, count: number, yrange: { min: number; max: number }) {
  let i = 0;
  const series = [];
  while (i < count) {
    //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([baseval, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}

// scatter-datetime

// HeatMap Chart
function generateDataHeatmap(count: number, yrange: { min: number; max: number }) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = 'w' + (i + 1).toString();
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}

//Rounded HeatMap Chart
function generateDataRounded(count: number, yrange: { min: number; max: number }) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = (i + 1).toString();
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}
