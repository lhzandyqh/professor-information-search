<template>
  <div class="app-container">
    <nav class="clearfix">
      <div class="mainlogo_container">
        <img src="../../assets/main_logo.png">
      </div>
      <div class="login-container">
        <span>Login</span>
        <img src="../../assets/touxiang.png">
      </div>
    </nav>
    <div class="container">
      <div class="first">
        <el-row :gutter="10">
          <el-col :span="16">
            <div class="hangone-left">
              <el-row>
                <el-col :span="6">
                  <div class="pro_photo_container">
                    <img :src="photoAddress">
                    <div style="margin-top: 30px">
                      <span style="font-size: 15px"><span style="font-weight: bolder">浏览量:</span>500</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="intur_container">
                    <div class="name">
                      <span>YuePin Yin(殷跃平)</span>
                    </div>
                    <el-divider></el-divider>
                    <div class="zhiwu">
                      <el-row :gutter="40">
                        <el-col :span="1">
                          <div style="margin-top: 1px">
                            <img src="../../assets/danwei.png">
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div>
                            <span>China Geological Survey;Beijing ;China</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="danwei">
                      <el-row :gutter="40">
                        <el-col :span="1">
                          <div style="margin-top: 1px">
                            <img src="../../assets/zhiwu.png">
                          </div>
                        </el-col>
                        <el-col :span="16">
                          <div>
                            <span>暂无</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="geren">
                      <el-row :gutter="40">
                        <el-col :span="1">
                          <div style="margin-top: 1px">
                            <img src="../../assets/jieshao.png">
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div>
                            <span>个人介绍:</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div style="margin-top: 10px">
                      <span>{{intru}}</span>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="hangone-right">
              <div style="width: 100%;height: 50px;background-color: #f4f4f4">
                <span style="display: block;width: 200px;height: 50px;line-height: 50px;margin-left: 30px;font-size: 15px;font-weight: bolder">网络关系</span>
              </div>
              <div style="width: 100%;height: 100%;padding-left: 20px;margin-top: -25px">
                <relation-chart></relation-chart>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="second">
        <div class="first">
          <el-row :gutter="10">
            <el-col :span="16">
              <div class="hangone-left">
                <div style="width: 100%;height: 50px;background-color: #f4f4f4">
                  <span style="display: block;width: 200px;height: 50px;line-height: 50px;margin-left: 30px;font-size: 15px;font-weight: bolder">研究方向</span>
                </div>
<!--                <research-chart></research-chart>-->
                <research-chart-two></research-chart-two>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="hangone-right">
                <div style="width: 100%;height: 50px;background-color: #f4f4f4">
                  <span style="display: block;width: 200px;height: 50px;line-height: 50px;margin-left: 30px;font-size: 15px;font-weight: bolder">作者统计</span>
                </div>
                <radar-chart></radar-chart>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="third">
        <div class="first">
          <el-row :gutter="10">
            <el-col :span="16">
              <div class="hangthree-left">
                <div style="width: 100%;height: 50px;background-color: #f4f4f4">
                  <span style="display: block;width: 200px;height: 50px;line-height: 50px;margin-left: 30px;font-size: 15px;font-weight: bolder">论文<span style="font-size: 14px;margin-left: 30px;color: #898989">共{{paperData.length}}篇</span></span>
                </div>
                <div class="shunxu">
                  <span>排序</span>
                  <div style="display: inline-block;margin-left: 20px">
                  <el-radio-group v-model="radio3" size="small">
                    <el-radio label="1" border>按年份递增排序</el-radio>
                    <el-radio label="2" border>按年份递减排序</el-radio>
                  </el-radio-group>
                  </div>
                </div>
                <div v-for="item in paperData.slice((currentPage-1)*pagesize,currentPage*pagesize)" class="papercontainer">
                  <div style="height: 30px"><span>{{item[0].PaperName}}</span></div>
                  <div style="height: 30px"><span style="font-size: 10px;color: rgba(74,221,160,0.98)"><span style="color: #545454;margin: 0">keyword:</span> {{item[0].KeyWord}}</span></div>
                  <div style="height: 30px">
                    <span style="font-size: 10px;color: rgba(221,86,27,0.98)"><span style="color: #545454;margin: 0">author:</span> {{item[0].Authors}} </span>
                    <span style="font-size: 10px;color: rgba(221,86,27,0.98)"><span style="color: #545454;margin-left: 20px">Journal:</span>  {{item[0].Journal}} </span>
                    <span style="font-size: 10px;color: rgba(221,86,27,0.98)"><span style="color: #545454;margin-left: 20px">citation:</span>  {{item[0].citation}} </span>
                    <span style="font-size: 10px;color: rgba(221,86,27,0.98)"><span style="color: #545454;margin-left: 20px">Year:</span>  {{item[0].Year}} </span>
                    <img src="../../assets/diqiu.png" style="float: right;height: 20px;width: 20px;margin-right: 40px;cursor: pointer">
                  </div>
                </div>
                <div class="fenye">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage2"
                    :page-sizes="[5, 10, 15, 20]"
                    :page-size="5"
                    layout="sizes, prev, pager, next"
                    :total="paperData.length">
                  </el-pagination>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="copyrightContainer">
      <span style="font-size: 12px">Copyright&nbsp;&nbsp;&nbsp;中科智禾教育大大数据中心   ©2019</span>
    </div>
  </div>
</template>

<script>
import {getProfessorInformation, getPapersData, getPapersDataJian} from '@/api/getPersonalInforamtion'
import relationChart from '@/components/charts/relationChart'
import researchChart from '@/components/charts/researchChart'
import researchChartTwo from '@/components/charts/researchChartTwo'
import radarChart from '@/components/charts/radarChart'
// import axios from 'axios'
export default {
  name: 'index',
  Create() {
  },
  components: {
    relationChart,
    researchChart,
    researchChartTwo,
    radarChart
  },
  data() {
    return {
      currentPage: '1',
      pagesize: '5',
      radio3: '1',
      intru: '',
      photoAddress: '',
      paperData: ''
    }
  },
  mounted(){
    this.getProdata()
    this.getPapers()
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
    getPapers: function () {
      const prams = {
        AuthorName: '殷跃平'
      }
      getPapersData(prams).then( response=>{
        console.log('测试获取教授的论文信息')
        console.log(response.data)
        this.paperData = response.data.info
        console.log('测试是否保存')
        console.log(this.paperData)
      })
    },
    getProdata: function () {
      const prams = {
        AuthorName: '殷跃平'
      }
      getProfessorInformation(prams).then( response=>{
        console.log('测试获取教授的基本信息')
        console.log(response.data)
        this.intru = response.data.IndividualResume
        this.photoAddress = response.data.PhotoAddress
      })
    }
  }
}
</script>

<style scoped>
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  .clearfix {
    overflow: hidden;
  }
  nav {
    height: 100px;
    background-color: #e0e0e0;
  }
  .mainlogo_container img {
    float: left;
    width: 200px;
    height: 200px;
    margin-top: -50px;
  }
  .login-container {
    float: right;
    margin-right: 30px;
  }
  .login-container span {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    font-weight: bolder;
    cursor: pointer;
  }
  .login-container img {
    margin-left: 20px;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .main-content {
    background-color: pink;
  }
  .main-logo {
    text-align: center;
    height: 300px;
  }
  .search-container {
    text-align: center;
  }
  .search-container input {
    width: 300px;
    padding: 10px;
    height: 30px;
    line-height: 30px;
    border-radius: 20px;
    border-style: solid;
    border-color: #e0e0e0;
    outline:none;
    font-size: 15px;
    background: url('../../assets/sousuo.png')no-repeat  right  ;
  }
  .search-container span{
    font-size: 14px;
    cursor: pointer;
    margin-left: 40px;
    color: #4b4b4b;
  }
  .copyrightContainer {
    text-align: center;
    margin-top: 150px;
  }
  .first {
    padding-top: 20px;
  }
  .hangone-left {
    width: 100%;
    height: 400px;
    background-color: #ffffff;
    border-style: solid;
    border-width: 1px;
    border-color: #ececec;
  }
  .hangthree-left {
    width: 100%;
    background-color: #ffffff;
    border-style: solid;
    border-width: 1px;
    border-color: #ececec;
  }
  .hangone-right {
    width: 100%;
    height: 400px;
    background-color: #ffffff;
    border-style: solid;
    border-width: 1px;
    border-color: #ececec;
  }
  .pro_photo_container {
    padding: 30px;
  }
  .pro_photo_container img {
    display: block;
    width: 150px;
    height: 200px;
    background-color: skyblue;
  }
  .intur_container {
    padding: 20px;
  }
  .name span{
    font-size: 25px;
    font-weight: normal;
    color: #464646;
  }
  .zhiwu {
    height: 40px;
  }
  .geren img,
  .danwei img,
  .zhiwu img {
    width: 30px;
    height: 30px;
  }
  .geren {
    margin-top: 20px;
  }
  .geren span,
  .danwei span,
  .zhiwu span {
    display: inline-block;
    height: 40px;
    width: 300px;
    line-height: 40px;
  }
  .shunxu {
    height: 50px;
    /*background-color: #42b983;*/
  }
  .shunxu span {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    margin-left: 40px;
  }
  .papercontainer {
    margin-top: 30px;
    border-bottom-style: dashed;
    border-bottom-width: 1px;
    margin-left: 30px;
    padding-bottom: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
  }
  .copyrightContainer {
    text-align: center;
    margin-top: 150px;
    margin-bottom: 20px;
  }
  .fenye {
    text-align: center;
    margin-bottom: 20px;
  }
</style>
