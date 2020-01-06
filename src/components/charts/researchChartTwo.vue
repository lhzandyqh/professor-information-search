<template>
  <div id="researchtwo" style="width: 770px;height: 400px;"></div>
</template>

<script>
import echarts from 'echarts'
  export default {
    name: 'researchChartTwo',
    mounted () {
      this.initChart()
    },
    data() {
      return {
      }
    },
    methods: {
      initChart () {
        this.chart = echarts.init(document.getElementById('researchtwo'))
        var base = +new Date(2016, 9, 3);
        var oneDay = 24 * 3600 * 1000*365;
        var valueBase = Math.random() * 300;
        var valueBase2 = Math.random() * 50;
        var valueBase3 = Math.random() * 50;
        var valueBase4 = Math.random() * 50;
        var valueBase5 = Math.random() * 50;
        var valueBase6 = Math.random() * 50;
        var data = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        var data5 = [];
        var data6 = [];

        for (var i = 1; i < 5; i++) {
          var now = new Date(base += oneDay);
          var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');

          valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
          valueBase <= 0 && (valueBase = Math.random() * 300);
          data.push([dayStr, valueBase]);

          valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
          valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
          data2.push([dayStr, valueBase2]);

          valueBase3 = Math.round((Math.random() - 0.5) * 20 + valueBase3);
          valueBase3 <= 0 && (valueBase3 = Math.random() * 50);
          data3.push([dayStr, valueBase3]);

          valueBase4 = Math.round((Math.random() - 0.5) * 20 + valueBase4);
          valueBase4 <= 0 && (valueBase4 = Math.random() * 300);
          data4.push([dayStr, valueBase4]);

          valueBase5 = Math.round((Math.random() - 0.5) * 20 + valueBase5);
          valueBase5 <= 0 && (valueBase5 = Math.random() * 50);
          data5.push([dayStr, valueBase5]);

          valueBase6 = Math.round((Math.random() - 0.5) * 20 + valueBase6);
          valueBase6 <= 0 && (valueBase6 = Math.random() * 50);
          data6.push([dayStr, valueBase6]);
        }
        var option = {
          animation: false,
          tooltip: {
            triggerOn: 'none',
            position: function (pt) {
              return [pt[0], 130];
            }
          },
          toolbox: {
            left: 'right',
            itemSize: 25,
            top: 55,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {}
            }
          },
          xAxis: {
            type: 'time',
            // boundaryGap: [0, 0],
            axisPointer: {
              value: '2016-10-7',
              snap: true,
              lineStyle: {
                color: '#004E52',
                opacity: 0.5,
                width: 2
              },
              label: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('yyyy-MM-dd', params.value);
                },
                backgroundColor: '#004E52'
              },
              handle: {
                show: true,
                color: '#004E52'
              }
            },
            splitLine: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            axisTick: {
              inside: true
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              inside: true,
              formatter: '{value}\n'
            },
            z: 10
          },
          grid: {
            top: 110,
            left: 15,
            right: 15,
            height: 160
          },
          dataZoom: [{
            type: 'inside',
            throttle: 50
          }],
          series: [
            {
              name: 'Micropile',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 5,
              sampling: 'average',
              itemStyle: {
                color: '#9cd4d8'
              },
              stack: 'a',
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#9cd4d8'
                }, {
                  offset: 1,
                  color: '#ffe'
                }])
              },
              data: data
            },
            {
              name: 'Wenchuan Earthquake',
              type: 'line',
              smooth: true,
              stack: 'a',
              symbol: 'circle',
              symbolSize: 5,
              sampling: 'average',
              itemStyle: {
                color: '#cae4f4'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#cae4f4'
                }, {
                  offset: 1,
                  color: '#ffe'
                }])
              },
              data: data2
            },
            {
              name: 'Landslide',
              type: 'line',
              smooth: true,
              stack: 'a',
              symbol: 'circle',
              symbolSize: 5,
              sampling: 'average',
              itemStyle: {
                color: '#fff498'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#fff498'
                }, {
                  offset: 1,
                  color: '#f2ff'
                }])
              },
              data: data3
            },
            {
              name: 'Model Test',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 5,
              sampling: 'average',
              itemStyle: {
                color: '#a0b9ec'
              },
              stack: 'a',
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#a0b9ec'
                }, {
                  offset: 1,
                  color: '#ffe'
                }])
              },
              data: data
            },
            {
              name: 'Slope Engineering',
              type: 'line',
              smooth: true,
              stack: 'a',
              symbol: 'circle',
              symbolSize: 5,
              sampling: 'average',
              itemStyle: {
                color: '#c7db68'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#c7db68'
                }, {
                  offset: 1,
                  color: '#ffe'
                }])
              },
              data: data5
            }
          ]
        }
        this.chart.setOption(option)
      }
    }
  }
</script>

<style scoped>

</style>
