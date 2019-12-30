<template>
  <div class="app-container">
    <nav>
      <div class="mainlogo_container">
        <img src="../../assets/main_logo.png">
      </div>
      <div class="login-container">
        <span>Login</span>
        <img src="../../assets/touxiang.png">
      </div>
    </nav>
    <div class="main-content container">
      <div class="main-logo">
        <img src="../../assets/mainlogo.png">
      </div>
      <div class="search-container">
        <input type="text" placeholder="请输入关键词" />
        <span @click="gotoProIndex">高级搜索</span>
      </div>
    </div>
    <div class="copyrightContainer">
      <span style="font-size: 12px">Copyright&nbsp;&nbsp;&nbsp;中科智禾教育大大数据中心   ©2019</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    gotoProIndex: function () {
      this.$router.push('/professorindex')
    }
  }
}
</script>

<style scoped>
  .container {
    width: 1400px;
    margin: 0 auto;
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
    /*background-color: pink;*/
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
</style>
