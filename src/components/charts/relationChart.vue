<template>
  <div class="app=container">
    <div id="main" style="width: 385px;height: 400px;"></div>
    <div id="showDiv" style="background-color:#fff; width: 400px; height: 200px;font-size: 14px;box-shadow:0 0 1px #000;">
      <el-row>
        <el-col :span="6">
          <div class="photo">
            <img>
          </div>
        </el-col>
        <el-col :span="18">
          <el-row>
            <div class="wangluo">
              <span style="font-weight: bolder">{{info.name}}</span>
              <span style="font-weight: bolder">({{info.englishName}})</span>
              <img src="../../assets/quxiao.png" @click="closeTag">
            </div>
          </el-row>
          <el-row class="title wangluo">
            <span>h-index:<span>{{info.inde}}</span></span>
            <span style="margin-left: 30px">论文数：<span>{{info.lunwen}}</span></span>
          </el-row>
          <el-row class="title wangluo">
            <span>引用数:<span>{{info.citation}}</span></span>
            <span  style="margin-left: 30px">合作论文：<span>{{info.workingPapers}}</span></span>
          </el-row>
          <el-row class="biaoqian">
            <el-tag
              style="margin-left: 20px"
              v-for="item in items"
              :key="item.label"
              :type="item.type"
              effect="dark">
              {{ item.label }}
            </el-tag>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import echarts from 'echarts'
import {getRelationData} from '@/api/getPersonalInforamtion'
import 'echarts/theme/macarons.js'
  export default {
    name: 'relationChart',
    mounted () {
      $("#showDiv").hide()
      this.initChart()
    },
    methods: {
      getRelation: function() {
        var relationData = {}
        const prams = {
          AuthorName: '殷跃平'
        }
        getRelationData(prams) .then(response=>{
          console.log('函数里面测试从服务器拿来的关系数据')
          console.log(response.data)
        })
        return relationData
      },
      closeTag: function() {
        $("#showDiv").hide()
      },
      getPosition: function(ev) {
        ev = ev || window.event;
        var point = { x: 0, y: 0 };
        if (ev.pageX || ev.pageY) {
          point.x = ev.pageX;
          point.y = ev.pageY;
        } else {//兼容ie
          point.x = ev.clientX + document.body.scrollLeft - document.body.clientLeft;
          point.y = ev.clientY + document.documentElement.scrollTop;
        }
        return point;
      },
      initChart () {
        this.chart = echarts.init(document.getElementById('main'))
        let categories = [];
        for (var i = 0; i < 2; i++) {
          categories[i] = {
            name: '类目' + i
          };
        }
        // var initdata = this.getRelation()
        // const option = {
        //   title: {
        //     text: ''
        //   },
        //   // 提示框的配置
        //   // tooltip: {
        //   //   // formatter: function (x) {
        //   //   //   return x.data.des;
        //   //   // }
        //   // },
        //   // 工具箱
        //   toolbox: {
        //     // 显示工具箱
        //     show: false,
        //     feature: {
        //       mark: {
        //         show: false
        //       },
        //       // 还原
        //       restore: {
        //         show: true
        //       },
        //       // 保存为图片
        //       saveAsImage: {
        //         show: true
        //       }
        //     }
        //   },
        //   // legend: [{
        //   //   // selectedMode: 'single',
        //   //   data: categories.map(function (a) {
        //   //     return a.name;
        //   //   })
        //   // }],
        //   series: [{
        //     type: 'graph', // 类型:关系图
        //     layout: 'force', //图的布局，类型为力导图
        //     symbolSize: 40, // 调整节点的大小
        //     roam: 'scale', // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
        //     edgeSymbol: ['circle', 'arrow'],
        //     edgeSymbolSize: [2, 10],
        //     edgeLabel: {
        //       normal: {
        //         textStyle: {
        //           fontSize: 20
        //         }
        //       }
        //     },
        //     force: {
        //       repulsion: 2500,
        //       edgeLength: [10, 50]
        //     },
        //     draggable: true,
        //     lineStyle: {
        //       normal: {
        //         width: 2,
        //         color: '#89959a',
        //       }
        //     },
        //     edgeLabel: {
        //       normal: {
        //         show: false,
        //         formatter: function (x) {
        //           return x.data.name;
        //         }
        //       }
        //     },
        //     label: {
        //       normal: {
        //         show: true,
        //         position: 'left',
        //         textStyle: {}
        //       }
        //     },
        //
        //     // 数据
        //     data: [{
        //       name: 'node01',
        //       // des: 'nodedes01',
        //       symbolSize: 10,
        //       category: 0,
        //     }, {
        //       name: 'node02',
        //       // des: 'nodedes02',
        //       symbolSize: 10,
        //       category: 1,
        //     }, {
        //       name: 'node03',
        //       // des: 'nodedes3',
        //       symbolSize: 10,
        //       category: 1,
        //     }, {
        //       name: 'node04',
        //       // des: 'nodedes04',
        //       symbolSize: 10,
        //       category: 1,
        //     }, {
        //       name: 'node05',
        //       // des: 'nodedes05',
        //       symbolSize: 10,
        //       index:3,
        //       lunwen: 20,
        //       category: 1
        //     }],
        //     links: [{
        //       source: 'node01',
        //       target: 'node02',
        //       name: 'link01',
        //       //des: 'link01des'
        //     }, {
        //       source: 'node01',
        //       target: 'node03',
        //       name: 'link02',
        //       // des: 'link02des'
        //     }, {
        //       source: 'node01',
        //       target: 'node04',
        //       name: 'link03',
        //       // des: 'link03des'
        //     }, {
        //       source: 'node01',
        //       target: 'node05',
        //       // name: 'link04',
        //       des: 'link05des'
        //     }],
        //     categories: categories,
        //     legendHoverLink : true
        //   }]
        // }
        // option.series.data = initdata.data.data
        // option.series.data = initdata.data.links
        // this.option = {}
        this.option = {
          title: {
            text: ''
          },
          // 提示框的配置
          // tooltip: {
          //   // formatter: function (x) {
          //   //   return x.data.des;
          //   // }
          // },
          // 工具箱
          toolbox: {
            // 显示工具箱
            show: false,
            feature: {
              mark: {
                show: false
              },
              // 还原
              restore: {
                show: true
              },
              // 保存为图片
              saveAsImage: {
                show: true
              }
            }
          },
          // legend: [{
          //   // selectedMode: 'single',
          //   data: categories.map(function (a) {
          //     return a.name;
          //   })
          // }],
          series: [{
            type: 'graph', // 类型:关系图
            layout: 'circular', //图的布局，类型为力导图
            symbolSize: 40, // 调整节点的大小
            zoom: 0.95,
            scaleLimit: { //滚轮缩放的极限控制
              min: 0.25,
              max: 2
            },
            roam: ',scale', // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [2, 10],
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            force: {
              repulsion: 2500,
              edgeLength: [10, 50]
            },
            draggable: true,
            lineStyle: {
              normal: {
                width: 2,
                color: '#89959a',
              }
            },
            edgeLabel: {
              normal: {
                show: false,
                formatter: function (x) {
                  return x.data.name;
                }
              }
            },
            label: {
              normal: {
                show: true,
                position: 'insideRight',
                textStyle: {}
              }
            },

            // 数据
            data: [{
              name: 'node01',
              // des: 'nodedes01',
              symbolSize: 10,
              category: 0,
            }, {
              name: 'node02',
              // des: 'nodedes02',
              symbolSize: 10,
              category: 1,
            }, {
              name: 'node03',
              // des: 'nodedes3',
              symbolSize: 10,
              category: 1,
            }, {
              name: 'node04',
              // des: 'nodedes04',
              symbolSize: 10,
              category: 1,
            }, {
              name: 'node05',
              // des: 'nodedes05',
              symbolSize: 10,
              index:3,
              lunwen: 20,
              category: 1
            }],
            links: [{
              source: 'node01',
              target: 'node02',
              name: 'link01',
              //des: 'link01des'
            }, {
              source: 'node01',
              target: 'node03',
              name: 'link02',
              // des: 'link02des'
            }, {
              source: 'node01',
              target: 'node04',
              name: 'link03',
              // des: 'link03des'
            }, {
              source: 'node01',
              target: 'node05',
              // name: 'link04',
              des: 'link05des'
            }],
            categories: categories,
            legendHoverLink : true
          }]
        }
        var initOption = this.option
        var initdata
        const prams = {
          AuthorName: '殷跃平'
        }
        getRelationData(prams) .then(response=>{
          // console.log('函数里面测试从服务器拿来的关系数据')
          // console.log(response.data)
          initdata = response.data
        })
        // console.log('测试从服务器拿来的关系数据',initdata)
        console.log('测试initoption',initOption)
        // console.log(initOption.series[0].data)
        // console.log(initdata.data.data)
        setTimeout( ()=> {
          console.log('测试从服务器拿来的关系数据',initdata)
          initOption.series[0].data = initdata.data
          initOption.series[0].links = initdata.links
        }, 800)
        // setTimeout( ()=> {
        //   console.log('二次测试initoption',initOption)
        // }, 2000)
        setTimeout( ()=> {
          this.chart.setOption(initOption)
        }, 1000)
        // this.chart.setOption(this.option)
        var that = this
        this.chart.on('click',function (param) {
          console.log('param---->', param);
          console.log('测试位置')
          const pos = that.getPosition()
          console.log(pos)
          $('#showDiv').css({position:"absolute",'z-index':80,left:pos.x-400,top:pos.y-100});
          $("#showDiv").show()
          that.info.inde = param.data.hindex
          that.info.lunwen = param.data.Papers
          that.info.name = param.data.name
          that.info.englishName = param.data.EnglishName
          that.info.citation = param.data.Citation
          that.info.workingPapers = param.data.workingPapers
          console.log('测试数据')
          console.log(that.info)
        })
      }
    },
    data() {
      return {
        zhanshi: false,
        items: [
          { type: '', label: '学生' },
          { type: 'success', label: '合作者' },
          { type: 'danger', label: '导师' }
        ],
        info: {
          name: '',
          englishName: '',
          inde: '',
          lunwen: '',
          citation: '',
          workingPapers: ''
        }
      }
    }
  }
</script>

<style scoped>
  /*#main {*/
  /*  width: 75%;*/
  /*  height: 75%;*/
  /*}*/
  #main>div>canvas:hover{
    cursor: none;
  }
  .photo {
    padding: 20px;
  }
  .photo img {
    width: 100px;
    height: 150px;
    background-color: #42b983;
  }
  .wangluo {
    margin-top: 20px;
    margin-left: 40px;
  }
  .wangluo img {
    width: 20px;
    height: 20px;
    float: right;
    margin-right: 20px;
    cursor: pointer;
  }
  .biaoqian {
    margin-left: 20px;
    margin-top: 20px;
  }
</style>
