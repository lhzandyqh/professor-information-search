<template>
  <div id="radar" style="width: 400px;height: 400px;"></div>
</template>

<script>
import echarts from 'echarts'
  export default {
    name: 'radarChart',
    mounted () {
      this.initChart()
    },
    data() {
      return {
        option: {
          title: {
            // text: '自定义雷达图'
          },
          radar: [
            {
              indicator: [
                { text: '#Papers' },
                { text: '#Citation' },
                { text: 'H-index' },
                { text: 'G-index' },
                { text: 'Activity' },
                { text: 'Diversity' },
                { text: 'Sociability' }
              ],
              center: ['50%', '45%'],
              radius: 120,
              startAngle: 90,
              splitNumber: 4,
              shape: 'circle',
              name: {
                formatter: '【{value}】',
                textStyle: {
                  color: '#72ACD1'
                }
              },
              splitArea: {
                areaStyle: {
                  color: ['rgba(114, 172, 209, 0.2)',
                    'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                    'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                  shadowColor: 'rgba(0, 0, 0, 0.3)',
                  shadowBlur: 10
                }
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.5)'
                }
              },
              splitLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.5)'
                }
              }
            },
          ],
          series: [
            {
              name: '雷达图',
              type: 'radar',
              emphasis: {
                lineStyle: {
                  width: 4
                }
              },
              data: [
                {
                  value: [46, 600, 22, 44, 6,3,14],
                  name: '图二',
                  label: {
                    show: true,
                    formatter: function(params) {
                      return params.value;
                    }
                  },
                  areaStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                  }
                }
              ]
            }
          ]
        }
      }
    },
    methods: {
      initChart () {
        this.chart = echarts.init(document.getElementById('radar'))
        this.chart.setOption(this.option)
      }
    }
  }
</script>

<style scoped>

</style>
