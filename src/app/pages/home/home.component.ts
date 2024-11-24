import { Component } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import * as echarts from 'echarts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [SharedModule],
  
})
export class HomeComponent {;
  private chart1: echarts.ECharts | null = null;
  private chart2: echarts.ECharts | null = null;

  ngAfterViewInit(): void {
    const dom1 = document.getElementById('chart-container1');
    if (dom1) {
      this.chart1 = echarts.init(dom1, null, {
        renderer: 'canvas',
        useDirtyRect: false,
      });

      const option1 = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '1%',
          left: 'center',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 3, name: 'Vigentes',itemStyle: {
                color: '#4caf50',
              }, },
              { value: 30, name: 'Concluidos',itemStyle: {
                color: '#f44336',
              }, },
            ],
          },
        ],
      };

      this.chart1.setOption(option1);
    }

    const dom2 = document.getElementById('chart-container2');
    if (dom2) {
      this.chart2 = echarts.init(dom2, null, {
        renderer: 'canvas',
        useDirtyRect: false,
      });

      const option2 = {
        dataset: [
          {
            dimensions: ['name', 'age', 'profession', 'score', 'date'],
            source: [
              ['Estaci. 1', 41, 'Engineer', 314, '2011-02-12'],
              ['Estaci. 2', 20, 'Teacher', 351, '2011-03-01'],
              ['Estaci. 3', 52, 'Musician', 287, '2011-02-14'],
              ['Estaci. 4', 37, 'Teacher', 219, '2011-02-18'],
              ['Estaci. 5', 25, 'Engineer', 253, '2011-04-02'],
              ['Estaci. 6', 19, 'Teacher', '-', '2011-01-16'],
              ['Estaci. 7', 71, 'Engineer', 165, '2011-03-19'],
              ['Estaci. 8', 36, 'Musician', 318, '2011-02-24'],
              ['Estaci. 9', 67, 'Engineer', 366, '2011-03-12'],
            ],
          },
          {
            transform: {
              type: 'sort',
              config: { dimension: 'score', order: 'desc' },
            },
          },
        ],
        xAxis: {
          type: 'category',
          axisLabel: { interval: 0, rotate: 60 },
        },
        yAxis: {},
        series: {
          type: 'bar',
          encode: { x: 'name', y: 'score' },
          datasetIndex: 1,
        },
      };

      this.chart2.setOption(option2);
    }

    window.addEventListener('resize', this.resizeCharts);
  }

  resizeCharts = () => {
    if (this.chart1) this.chart1.resize();
    if (this.chart2) this.chart2.resize();
  };

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeCharts);
    if (this.chart1) {
      this.chart1.dispose();
      this.chart1 = null;
    }
    if (this.chart2) {
      this.chart2.dispose();
      this.chart2 = null;
    }
  }
  
}
